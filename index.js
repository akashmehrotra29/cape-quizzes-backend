const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/connectDB");

const app = express();
connectDB();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

const errorHandler = require("./middlewares/errorHandler.middleware");
const invalidRouteHandler = require("./middlewares/invalidRouteHandler.middleware");

app.get("/", (req, res) => {
  res.send("Hello Express app!");
});

app.use(invalidRouteHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server started");
});
