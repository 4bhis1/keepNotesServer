const mongoose = require("mongoose");
const moment = require("moment");

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: { type: String, unique: true },
  email: { type: String, unique: true },
  subscribed: { type: Boolean, default: false },
  pswrd: String,
  verified: { type: Boolean, default: false },
  OTP: String,
  createdon: {
    type: String,
    default: moment().format("MM/DD/YYYY HH:mm:ss"),
  },
});

UserSchema.virtual("fullname", () => {
  return this.firstName + " " + this.lastName;
});

module.exports = mongoose.model("users", UserSchema);
