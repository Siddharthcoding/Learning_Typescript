import express from 'express';
import { register } from '../controllers/authentication.js';

export const router = express.Router();

router.post('/register', register);

