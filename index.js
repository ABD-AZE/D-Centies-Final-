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
app.use(bodyParser.json());
connectdb();
givequiz();
activequiz();
createquiz();
submitquiz();
checkquizfield();

