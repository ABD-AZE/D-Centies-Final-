import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config()

const app = express();
const connectdb = async () => {
   
  try {
    const connectionprocess = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DB_NAME}`
      );
      console.log(
        `\n mongo db is connected on , ${connectionprocess.connection.host}`
        );
      } catch (error) {
        console.log("MONGODB CONNECTION FAILED", error);
        process.exit(1);
      }
      app.listen(8000,(req,res)=>{
        console.log("Server running on port 8000");
      });
};






export {connectdb,app};
