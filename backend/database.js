const express=require("express");
const mongoose=require("mongoose");
mongoose.set("strictQuery", false);
const dotenv=require("dotenv");
dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;

const connectDb = (DATABASE_URL)=>{
  
    return mongoose.connect(DATABASE_URL,
      ).then((success)=>{
        console.log("database connected success");

    }).catch((error)=>{
        console.log(DATABASE_URL);
        console.log("database not connected");
        console.log(error);
    })
}
connectDb(DATABASE_URL);
module.exports={
    connectDb,
};