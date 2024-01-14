import {app} from "./db.js";
import bodyParser from 'body-parser';
import question from './quiz.model.js';
import { user } from "./user.model.js";
function createquiz(){
    app.post('/host',(req,res)=>{
        const numberOfQuestions = req.body.numberOfQuestions;
        const quizName = req.body.quizName;
        const newQuestion = new question({
            quizName:quizName,
            numberOfQuestions:numberOfQuestions
        })
        newQuestion.save(); 
    });
    app.post('/:quizname/submitQuestions',(req,res)=>{
        const quizName= req.params.quizname;
        const quizdata = question.findOne({quizName:quizName});

        const receivedData = req.body.data;
        const questionsArray=[];
        console.log(receivedData);
        for(let i=0;i<receivedData.length;i++){
            const questionData={
                question:receivedData[i].question,
                option1:receivedData[i].option1,
                option2:receivedData[i].option2,
                option3:receivedData[i].option3,
                option4:receivedData[i].option4,
                correctoption:receivedData[i].correctoption
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
}
export default createquiz;
