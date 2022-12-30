const mongoose = require("mongoose");
const moment = require("moment");

const { Schema } = mongoose;

const date = new Date();

const NotesSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: "users" },
  note: [
    {
      types: String,
      data: String,
    },
  ],
  heading: String,
  createdon: {
    type: String,
    default: moment().format("MM/DD/YYYY HH:mm:ss"),
  },
  updatedon: {
    type: String,
    default: moment().format("MM/DD/YYYY HH:mm:ss"),
  },
  pinned: {
    type: Boolean,
    default: false,
  },
  background: {
    type: String,
    default: "white",
  },
});

module.exports = mongoose.model("notes", NotesSchema);
