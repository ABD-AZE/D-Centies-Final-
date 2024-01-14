import {app} from "./db.js";
import question from "./quiz.model.js"
import { user } from './user.model.js';

function checkquizfield(){
    app.get("/:publicKey",async (req,res)=>{
        const publicKey = req.params.publicKey;
        const x = await user.findOne({publicKey:publicKey});
        if(!x){
            const newuser = new user({
                publicKey:publicKey
            })
            newuser.save();
            res.send("");
        }
        else{
        if(x.quizName){
            res.send(await question.findOne({quizName:x.quizName}));
        }
        else{
            res.send("");
        }
    }
    });
}

export default checkquizfield