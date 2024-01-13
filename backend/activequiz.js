import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import { fileURLToPath } from "url";
import { dirname } from "path";
import question from "./quiz.model.js";
import connectdb from "./db.js";
import mongoose from "mongoose";
import { user } from "./user.model.js";
connectdb();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.port;

app.use(bodyParser.json());

app.get("/activequiz", async (req, res) => {
  const quizzes = await question.find({}, "quizName");
  const name = [];
  quizzes.map((Element) => {
    name.push(Element.quizName);
    console.log(Element.quizName);
  });
  res.send(name);
});

app.listen(3000, () => {
  console.log("running at port 3000");
});
