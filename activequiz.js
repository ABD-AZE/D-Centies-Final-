import {app} from "./db.js";
import question from "./quiz.model.js"
function activequiz(){
  app.get("/activequiz", async (req, res) => {
    const quizzes = await question.find({}, "quizName");
    const name = [];
    quizzes.map((Element) => {
      name.push(Element.quizName);
      console.log(Element.quizName);
    });
    res.send(name);
  });
}
export default activequiz;


