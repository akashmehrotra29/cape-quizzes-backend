const Quiz = require("./models/quiz.model");
const quizzesDB = require("./quizzesDB");

// Express Middleware
const catchError = async (next, callback) => {
  try {
    await callback();
  } catch (err) {
    next(err);
  }
};

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

module.exports = { catchError, insertQuizzes };
