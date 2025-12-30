import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import express from "express";
import connectDB from "./db/index.js";

import app from "./app.js";


// Second way

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!! ", err);
  });
