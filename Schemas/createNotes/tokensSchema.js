const mongoose = require("mongoose");

const moment = require("moment");

const { Schema } = mongoose;

const tokenSchema = new Schema({
  token: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  location: String,
  device: String,
  createdon: {
    type: String,
    default: moment().format("MM/DD/YYYY HH:mm:ss"),
  },
  updatedon: {
    type: String,
    default: moment().format("MM/DD/YYYY HH:mm:ss"),
  },
});

module.exports = mongoose.model("connections", PostSchema);
