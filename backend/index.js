import express from 'express'
import dotenv from 'dotenv'

import User from './models/user.model.js';

import userRouter from './routes/user.route.js'

const app = express();
app.use(express.json());
app.use('/user',userRouter);
dotenv.config();

app.get('/',(req, res) => {
    res.send("Hello World");
})

app.listen(process.env.PORT, (req, res) => {
    console.log(`App is running at port ${process.env.PORT}`);
    
})

