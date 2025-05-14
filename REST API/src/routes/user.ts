import express from 'express';
import { getAllUsers, deleteUser, updateUser } from '../controllers/user.js';
import { isAuthenticated, isOwner } from '../middlewares/index.js';

export const router = express.Router();

router.get('/users', isAuthenticated, getAllUsers);
router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
router.patch('/users/:id', isAuthenticated, isOwner, updateUser);