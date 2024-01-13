import {app} from "./db.js";
function submitquiz(){

app.post('/:publicKey/submitquiz',(req,res)=>{
    const options= [];
    const array = req.body.data;
    array.map((element)=>{
        options.push(element);
    });
    console.log(options);
    res.send(options);
})
}

export default submitquiz;
