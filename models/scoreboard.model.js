const mongoose = require("mongoose");
const { Schema } = mongoose;

const resultArraySchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  hasTaken: { type: Boolean },
  selectedOption: { type: Schema.Types.ObjectId | String },
  correctOpton: { type: Schema.Types.ObjectId },
});

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
  resultArray: [resultArraySchema],
});

module.exports = mongoose.model("Scoreboard", scoreboardSchema);
