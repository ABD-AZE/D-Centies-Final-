import {app} from "./db.js";
import question from "./quiz.model.js"
import { user } from './user.model.js';

function checkquizfield(){
    app.get("/:publicKey",async (req,res)=>{
        const publicKey = req.params.publicKey;
        const x = await user.findOne({publicKey:publicKey});
        console.log(`${publicKey}`);
        if(x.quizName){
            res.send(await question.findOne({quizName:x.quizName}));
            console.log("ddsvjds");
        }
        else{
            res.send("");
            console.log("Df")
        }
    });
}

export default checkquizfield