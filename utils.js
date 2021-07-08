const Quiz = require("./models/quiz.model");
const quizzesDB = require("./quizzesDB");

const insertQuizzes = async () => {
  try {
    quizzesDB.forEach(async (quiz) => {
      const newQuiz = new Quiz(quiz);
      const savedQuiz = await newQuiz.save();
      console.log(savedQuiz);
    });
  } catch (error) {
    console.log("error while inserting quizzes. ", error);
  }
};

module.exports = { insertQuizzes };
