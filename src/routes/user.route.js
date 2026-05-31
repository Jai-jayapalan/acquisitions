import express from "express";
import { fetchAllUsers, fetchUserById, updateUserById, deleteUserById } from "#controllers/user.controller.js";
import { authenticateToken, requireRole } from "#middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.get('/', fetchAllUsers);
userRouter.get('/:id', authenticateToken, getUserById);
userRouter.put('/:id', authenticateToken, updateUser);
userRouter.delete('/:id', authenticateToken, requireRole(['admin']), deleteUserById);

export default userRouter;