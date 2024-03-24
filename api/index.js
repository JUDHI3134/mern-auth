import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const app = express();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Successfully connected to database")
}).catch((err)=>{
    console.log(err)
})


app.listen(3000,()=>{
    console.log("Server run port number 3000")
})