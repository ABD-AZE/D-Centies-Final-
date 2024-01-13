import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config()
const app = express();
const connectdb = async () => {
  try {
    console.log(`${process.env.PORT}`)
    console.log(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
    const connectionprocess = await mongoose.connect(
      `mongodb+srv://Raj_210809:Raj210809@cluster0.riqn6cw.mongodb.net/advancedbackend`
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
