
import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv"
import app from "./app.js";
dotenv.config();




// Second way

connectDB()
.then(() =>{
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
})
.catch((err) =>{
    console.log("MONGO db connection failed !!!! ",err)
})
