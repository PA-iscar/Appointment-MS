const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL =
  process.env.DB_URL ||
  "mongodb+srv://abhishek:something@parkinglot.zmq7a.mongodb.net/parkinglotDB?retryWrites=true&w=majority";

module.exports = () => {
  return mongoose.connect(DB_URL);
};
