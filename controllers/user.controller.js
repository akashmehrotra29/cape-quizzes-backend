const User = require("../models/user.model");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const catchError = require("../middlewares/catchError.middleware");

const signup = async (req, res, next) => {
  catchError(next, async () => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      throw new Error("User Already exists wtih this email");
    }

    const userName = await User.findOne({ userName: req.body.userName });
    if (userName) {
      throw new Error("UserName Already exists, try a different username");
    }

    const newUser = new User({
      ...req.body,
    });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    newUser.password = undefined;

    res.json({
      succcess: true,
      token,
      userName: newUser.userName,
      userId: newUser._id,
      firstName: newUser.firstName,
    });
  });
};

const login = async (req, res, next) => {
  catchError(next, async () => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      throw new Error("User does not exist. Sign up instead.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Email and Password does not match");
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    user.password = undefined;

    res.json({
      success: true,
      token,
      username: user.userName,
      userId: user._id,
      firstName: user.firstName,
    });
  });
};

module.exports = {
  signup,
  login,
};
