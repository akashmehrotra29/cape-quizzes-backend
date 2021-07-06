const mongoose = require("mongoose");
const { Schema } = mongoose;

const optionsSchema = new Schema({
  text: {
    type: String,
  },
  isRight: {
    type: Boolean,
  },
});

const questionsSchema = new Schema({
  question: {
    type: String,
    required: [true, "question is required"],
  },
  points: {
    type: Number,
    required: [true, "points is required"],
  },
  negativePoints: {
    type: Number,
    required: [true, "negativePoints is required"],
  },
  options: [optionsSchema],
});

const quizSchema = new Schema({
  category: {
    type: String,
    required: [true, "genre is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  playTime: {
    type: Number,
    required: [true, "play time is required"],
  },
  image: {
    type: String,
    required: [true, "image is required"],
  },
  questions: {
    type: [questionsSchema],
  },
});

module.exports = mongoose.model("Quiz", quizSchema);
