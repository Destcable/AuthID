import express from 'express';
import { query, validationResult } from 'express-validator';
import { registerUser } from '../controllers/authController';

const router = express.Router();

router.post(
    '/register', 
    query('name').notEmpty(),
    query('surname').notEmpty(), 
    registerUser
);

export default router;
