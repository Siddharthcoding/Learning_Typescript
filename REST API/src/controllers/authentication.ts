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