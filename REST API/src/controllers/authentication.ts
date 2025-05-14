import express from 'express';
import { getUserByEmail, createUser } from '../db/user.js';
import { random, authentication } from '../helper/index.js';

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.sendStatus(400);
        }

        const existingUser = await getUserByEmail(email);

        if(existingUser) {
            return res.status(409).json({message: 'User already exists'});
        }

        const salt = random(); 
        const hashedPassword = authentication(salt, password);

        const user = await createUser({
            username,
            email,
            authentication: {
                salt,
                password: hashedPassword,
                
            },
        });

        return res.status(201).json(user).end();

    } catch (error) {
        console.log(error);
        return res.status(400).json({message: 'Error creating user'});
    }
}

export const login = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.sendStatus(400);
        }

        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');

        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }

        const expectedHash = authentication(user.authentication.salt, password);

        if(user.authentication.password !== expectedHash) {
            return res.status(401).json({message: 'Invalid password'});
        }

        const salt = random();
        user.authentication.sessionToken = authentication(salt, user._id.toString());

        await user.save();

        res.cookie('sessionToken', user.authentication.sessionToken, { domain: 'localhost', path: '/'});

        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: 'Error logging in'});
    }
}