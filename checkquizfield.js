import {app} from "./db.js";
import question from "./quiz.model.js"
import { user } from './user.model.js';

function checkquizfield(){
    app.get("/:publicKey",async (req,res)=>{
        const publicKey = req.params.publicKey;
        const x = await user.findOne({publicKey:publicKey});
        if(x){
        console.log(`${publicKey}`);
        if(x.quizName){
            res.send(await question.findOne({quizName:x.quizName}));
            console.log("ddsvjds");
        }
        else{
            res.send("");
            console.log("Df")
        }
        }
        else{
            const newuser = new user({
                publicKey:publicKey
            })
            newuser.save();
            res.send("");
        }
    });
}

export default checkquizfield