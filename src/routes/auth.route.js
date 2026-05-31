import express from 'express';
import { signup } from '#controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/sign-up', signup);

authRouter.post('/sign-in', (req, res) => {
    return res.status(200).json({ message: 'Sign in successful' });
});

authRouter.post('/sign-out', (req, res) => {    
    return res.status(200).json({ message: 'Sign out successful' });
});

export default authRouter;