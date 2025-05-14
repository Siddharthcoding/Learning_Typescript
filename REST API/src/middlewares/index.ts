import express from 'express';
import pkg from 'lodash';
import { getUserBySessionToken } from '../db/user.js';

const { get, merge } = pkg;

export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { id } = req.params;
        console.log("isOwner:", id, typeof id);
        const currentUserid = get(req, 'identity._id') as string;
        console.log("currentUserid:", currentUserid, typeof currentUserid);        

        if(!currentUserid) {
            return res.status(401).json({message: 'Unauthorized'});
        }

        if(currentUserid.toString() !== id.toString()) {
            return res.status(403).json({message: 'Forbidden'});
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({message: 'Unauthorized'});
    }
}

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['sessionToken'];
        if(!sessionToken) {
            return res.status(401).json({message: 'Unauthorized'});
        }

        const existingUser = await getUserBySessionToken(sessionToken);

        if(!existingUser) {
            return res.status(401).json({message: 'Unauthorized'});
        }

        merge(req, { identity: existingUser });

        return next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({message: 'Unauthorized'});
    }
}
