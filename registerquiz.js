import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import  question  from './quiz.model.js';
import connectdb from './db.js';
import mongoose from 'mongoose';
import { user } from './user.model.js';
import { createPublicKey } from 'crypto';
connectdb();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.port;

app.use(bodyParser.json());

app.get('/activequiz/:publicKey/:quizName',async (req,res)=>{
    const publicKey = req.params.publicKey;
    const quizName = req.params.quizName;
    const x = await user.findOne({publicKey:publicKey});
    await user.findOneAndUpdate({publicKey:publicKey},{quizName:quizName});
    res.send(await user.findOne({publicKey:publicKey}));
}); 

app.listen(3000,()=>{
    console.log("asbd");
})