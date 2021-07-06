const Quiz = require("../models/quiz.model");
const { catchError } = require("../utils");

const getAllQuizzes = async (req, res, next) => {
  catchError(next, async () => {
    const quizzes = await Quiz.find();
    return res.json({ success: true, quiz: quizzes });
  });
};

module.exports = { getAllQuizzes };
