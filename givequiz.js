import {app} from "./db.js";
import { user } from "./user.model.js";
import question from "./quiz.model.js";
function givequiz(){
app.get("/:publicKey/givequiz", async (req, res) => {
    const publickey = req.params.publicKey;
  
    try {
      // Use Mongoose to find a user with the specified username and country
      const userProfile = await user.findOne({ publicKey: publickey });
      console.log(userProfile);
      const quizname = userProfile.quizName;
  
      const quiz = await question.findOne({ quizName: quizname });
      console.log(quiz);
      res.send(quiz);
  
      if (!userProfile) {
        return res.status(404).send("User not found");
      }

    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
}
export default givequiz;