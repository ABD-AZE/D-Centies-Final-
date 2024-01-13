import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
      publicKey:{type: String},
      quizName:{type: String}
  }  
);

export const user = mongoose.model("user", userSchema);
