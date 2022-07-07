import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";

import userRouter from "./routes/userRouter.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

app.use('/api/users', userRouter);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
