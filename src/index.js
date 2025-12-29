
import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config();

const app = express()


//=> Two Ways of coo=nnectiing to the mongo db  first is doing it in the index file that is here only 

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("ERROR:",error)
//             throw error
//         })

//         app.listen(process.env.PORT,() => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.log("ERROR:", error)
//     }
// }) 

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
