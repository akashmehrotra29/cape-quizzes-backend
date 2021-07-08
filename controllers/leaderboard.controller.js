const Scoreboard = require("../models/scoreboard.model");
const catchError = require("../middlewares/catchError.middleware");

const getLeaderboard = async (req, res, next) => {
  catchError(next, async () => {
    const leaderboard = await Scoreboard.find()
      .sort({ score: -1 })
      .limit(5)
      .populate({ path: "userId" })
      .populate({ path: "quizId" });
    res.json({ success: true, leaderboard });
  });
};

module.exports = { getLeaderboard };
