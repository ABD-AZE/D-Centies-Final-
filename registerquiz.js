import {app} from "./db.js";
function registerquiz(){
app.get('/activequiz/:publicKey/:quizName',async (req,res)=>{
    const publicKey = req.params.publicKey;
    const quizName = req.params.quizName;
    const x = await user.findOne({publicKey:publicKey});
    await user.findOneAndUpdate({publicKey:publicKey},{quizName:quizName});
    res.send(await user.findOne({publicKey:publicKey}));
}); 
}

export default registerquiz;