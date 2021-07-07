const Scoreboard = require("../models/scoreboard.model")

const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Scoreboard.find()
      .sort({ score: -1 })
      .limit(5)
      .populate({ path: "userId" })
      .populate({ path: "quizId" });
    res.json({success: true, leaderboard });
  } catch (error) {
    console.error({ error });
    res.status(404).json({success: false, error: error.message });
  }
};

module.exports = { getLeaderboard };
