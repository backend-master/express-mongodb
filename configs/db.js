require("dotenv").config();

const mongoose = require("mongoose");
const HOST = process.env.HOST;

mongoose.connect(HOST, {
  useNewUrlParser: true
});
mongoose.set("useCreateIndex", true);
