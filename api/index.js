import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

const app = express();
app.use(express.json())

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Successfully connected to database")
}).catch((err)=>{
    console.log(err)
})


app.listen(3000,()=>{
    console.log("Server run port number 3000")
})

app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)
