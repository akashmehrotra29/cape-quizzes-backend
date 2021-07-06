const mongoose = require("mongoose");
const { Schema } = mongoose;

const scoreboardSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  quizId: {
    type: Schema.Types.ObjectId,
    ref: "Quiz",
  },
  numberOfAttempts: {
    type: Number,
  },
  score: {
    type: Number,
  },
});

module.exports = mongoose.model("Scoreboard", scoreboardSchema);
