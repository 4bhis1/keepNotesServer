const mongoose = require("mongoose");

const { Schema } = mongoose;

const tokenSchema = new Schema(
  {
    token: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    location: String,
    device: String,
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

module.exports = mongoose.model("connections", tokenSchema);

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    subscribed: { type: Boolean, default: false },
    pswrd: String,
    verified: { type: Boolean, default: false },
    OTP: String,
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

UserSchema.virtual("fullname", () => {
  return this.firstName + " " + this.lastName;
});

module.exports = mongoose.model("users", UserSchema);
