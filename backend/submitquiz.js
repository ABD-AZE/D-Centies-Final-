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

app.post('/:publicKey/submitquiz',(req,res)=>{
    const options= [];
    const array = req.body.data;
    array.map((element)=>{
        options.push(element);
    });
    console.log(options);
    res.send(options);
})

app.listen(3000,()=>{
    console.log("khfbd");
})