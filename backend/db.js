import mongoose from "mongoose";

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
};


export default connectdb;
