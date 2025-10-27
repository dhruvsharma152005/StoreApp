//type commonjs
// const express = require('express')
// const dotenv=require("dotenv");
//type module
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"
const app = express()
dotenv.config();
app.use(express.json());
const port = process.env.PORT || 4000;
const uri=process.env.MongoDBURI;

app.use(cors());

//connect to mongodb
try{
   await mongoose.connect(uri);
    console.log("Connected to mongo DB")
}
catch(error){
    console.log("Error: ",error);
    process.exit(1);
}


//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
