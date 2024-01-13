import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import  question  from './quiz.model.js';
import connectdb from './db.js';
import mongoose from 'mongoose';
connectdb();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.port;



app.use(bodyParser.json());


app.post('/host/submitQuestions',(req,res)=>{
    const numberOfQuestions = req.body.numberOfQuestions;
    const quizName = req.body.quizName; 
    const receivedData = req.body.data;
    const questionsArray=[];
    console.log(receivedData);
    for(let i=0;i<receivedData.length;i++){
        const questionData={
            question:receivedData[i].question,
            option1:receivedData[i].option1,
            option2:receivedData[i].option2,
            option3:receivedData[i].option3,
            option4:receivedData[i].option4
        }
        questionsArray.push(questionData);
    }
    const newQuestion = new question({
        quizName: quizName,
        numberOfQuestions: numberOfQuestions,
        questions: questionsArray
    });

    newQuestion.save();
    
});

app.listen(port,()=>{
    console.log(`server listening at port: ${port}`);
})