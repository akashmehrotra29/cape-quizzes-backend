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
const userRoutes = require("./routes/user.route");
const scoreboardRoutes = require("./routes/scoreboard.route");

app.use("/", quizRoutes);
app.use("/", userRoutes);
app.use("/scoreboard", scoreboardRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to cape quizzes!");
});

//error handlers must be placed after all routes
app.use(invalidRouteHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server started");
});
