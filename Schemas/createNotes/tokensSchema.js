const mongoose = require("mongoose");

const { Schema } = mongoose;

const tokenSchema = new Schema({
  token: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  location: String,
  device: String,
});

module.exports = mongoose.model("connections", PostSchema);
