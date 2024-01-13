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
  
      // Do something with the user profile (e.g., send it as a JSON response)
      res.json(userProfile);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });