const Scoreboard = require("../models/scoreboard.model");
const catchError = require("../middlewares/catchError.middleware");

const updateScoreboard = async (req, res, next) => {
  catchError(next, async () => {
    const { quizId, score, resultArray } = req.body;
    const { userId } = req;

    const findQuiz = await Scoreboard.findOne({ userId, quizId });
    if (findQuiz) {
      await Scoreboard.findOneAndUpdate(
        { userId, quizId },
        {
          score,
          numberOfAttempts: findQuiz.numberOfAttempts + 1,
          resultArray: resultArray,
        }
      );
    } else {
      const newScore = new Scoreboard({
        userId,
        quizId,
        numberOfAttempts: 1,
        score,
        resultArray: resultArray,
      });
      await newScore.save();
    }
    const attemptedQuizDetails = await Scoreboard.find({ userId }).populate({
      path: "quizId",
    });
    res.json({ success: true, attemptedQuizDetails });
  });
};

const attemptedQuizzesOfUser = async (req, res, next) => {
  catchError(next, async () => {
    const { userId } = req;

    const attemptedQuizDetails = await Scoreboard.find({ userId }).populate({
      path: "quizId",
    });
    res.json({ success: true, attemptedQuizDetails });
  });
};

module.exports = { updateScoreboard, attemptedQuizzesOfUser };
