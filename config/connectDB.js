const mongoose = require("mongoose");

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log(error);
    console.log("DB Connection Failed");
  }
};

module.exports = connectMongoDb;
