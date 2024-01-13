import {app} from "./db.js";
function createquiz(){
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
}
export default createquiz;
