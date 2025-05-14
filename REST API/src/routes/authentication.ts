import express from 'express';
import { login, register } from '../controllers/authentication.js';

export const router = express.Router();

router.post('/register', register);
router.post('/login', login);
