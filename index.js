const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/connectDB");
const { insertQuizzes } = require("./utils");

const app = express();
connectDB();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

// insertQuizzes();

const errorHandler = require("./middlewares/errorHandler.middleware");
const invalidRouteHandler = require("./middlewares/invalidRouteHandler.middleware");
const quizRoutes = require("./routes/quiz.route");

app.use("/", quizRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to cape quizzes!");
});

// must be placed after all routes
app.use(invalidRouteHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server started");
});
