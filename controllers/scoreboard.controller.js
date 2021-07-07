const Scoreboard = require("../models/scoreboard.model");

const updateScoreboard = async (req, res) => {
  const { quizId, score, resultArray } = req.body;
  const { userId } = req;

  try {
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
  } catch (error) {
    console.error({ error });
    res.status(401).json({ success: false, error: error.message });
  }
};

const attemptedQuizzesOfUser = async (req, res) => {
  const { userId } = req;

  try {
    const attemptedQuizDetails = await Scoreboard.find({ userId }).populate({
      path: "quizId",
    });
    res.json({ success: true, attemptedQuizDetails });
  } catch (error) {
    console.error({ error });
    res.status(401).json({ success: false, error: error.message });
  }
};

module.exports = { updateScoreboard, attemptedQuizzesOfUser };
