import express from "express";

const userRoutes = express.Router();

import { getUsers, createUser } from '../controller/userController.js';

//metodo get
userRouter.get("/", getUsers);

//metodo post
userRouter.post("/", createUser);

export default userRouter;