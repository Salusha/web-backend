// require('dotenv').config({path: `./env`})       [completely ok working but inconsistent with import]
import dotenv from "dotenv"; //updating scripts at package.json for using this method 
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: `./env`
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running on port: ${process.env.PORT}`);
    })   
})
.catch((err)=> {
    console.log("MONGO db connection failed!!", err);
})





/*
import express from "express";
const app = express() 
// function connectDB(){}   //assuming connect ho gaya

// connectDB() //execute

;( async () => {                 // db is another continent
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`App is listening on PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: "error)
        throw err
    }
})()  //better approach
  */
