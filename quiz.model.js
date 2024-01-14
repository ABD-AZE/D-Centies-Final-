import mongoose from "mongoose";

  const quizSchema = new mongoose.Schema({
    quizName:{
              type: String,
              unique:true
            },
    numberOfQuestions:{type: Number},
    questions:[
    {
      question: { type: String },
      option1: { type: String },
      option2: { type: String },
      option3: { type: String },
      option4: { type: String },
      correctoption:{type:String}
    },
  ]});
  let question;
  export default question = mongoose.model("question",quizSchema)