import bodyParser from 'body-parser';
import  question  from './quiz.model.js';
import {connectdb} from './db.js';
import mongoose from 'mongoose';
import { user } from './user.model.js';
import givequiz from "./givequiz.js";
import activequiz from "./activequiz.js";
import createquiz from "./createquiz.js";
import submitquiz from "./submitquiz.js";
import checkquizfield from './checkquizfield.js';
import { app } from './db.js';
import cors from 'cors';
import link from './solidity/web3.js';
app.use(cors({
    origin: 'http://localhost:3000',  // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
app.use(bodyParser.json());
connectdb();
link();
givequiz();
activequiz();
createquiz();
submitquiz();
checkquizfield();

