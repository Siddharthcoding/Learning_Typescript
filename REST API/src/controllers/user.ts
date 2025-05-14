import express from 'express';
import { getUsers, deleteUserById, getUserById } from '../db/user.js';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();
        if (!users) {
            return res.status(404).json({ message: 'No users found' });
        }
 
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error fetching users' });
    }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'User ID is required' });
        }
        const deletedUser = await deleteUserById(id);

        return res.json({ message: 'User deleted successfully', deletedUser });
    } catch(error) {
        console.log(error);
        return res.status(500).json({ message: 'Error deleting user' });
    }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { username } = req.body;

        if(!username) {
            return res.status(400).json({ message: 'Username is required' });
        }
        console.log(username);
        

        const user = await getUserById(id);
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.username = username; // Update the username or any other fields you want to update
        await user.save();

        return res.status(200).json({ message: 'User updated successfully', user });
    } catch(error) {
        console.log(error);
        return res.status(500).json({ message: 'Error updating user' });
    }
}