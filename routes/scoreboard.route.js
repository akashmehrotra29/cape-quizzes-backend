const express = require("express");
const router = express.Router();

const {
  updateScoreboard,
  attemptedQuizzesOfUser,
} = require("../controllers/scoreboard.controller");

router.post("/", updateScoreboard);
router.get("/", attemptedQuizzesOfUser)

module.exports = router;
