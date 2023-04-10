const mongoose = require("mongoose");
const moment = require("moment");

const { Schema } = mongoose;

const NotesSchema = new Schema(
  {
    createdBy: { type: Schema.Types.ObjectId, ref: "users" },
    note: [
      {
        types: String,
        data: String,
      },
    ],
    heading: String,
    pinned: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
      default: "white",
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

module.exports = mongoose.model("notes", NotesSchema);
