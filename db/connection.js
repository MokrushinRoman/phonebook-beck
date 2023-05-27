const mongoose = require("mongoose");

const { DB_HOST } = process.env;

const connectMongo = async () => {
  await mongoose.connect(DB_HOST);
};

module.exports = connectMongo;
