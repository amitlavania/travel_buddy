import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
const app= express();
dotenv.config();


//middleware

// connection

mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.rstqcnt.mongodb.net/?retryWrites=true&w=majority`).then(()=>
app.listen(5000,()=>
console.log("Listening to local host port 5000")
)
).catch((err)=>console.log(err));

