const mongoose = require("mongoose");
const moment = require("moment");

const { Schema } = mongoose;

const date = new Date();

const NotesSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: "users" },
  groupName : String,
  note: [{ type: Schema.Types.ObjectId, ref: "notes" }],
  createdon: {
    type: String,
    default: moment().format("MM/DD/YYYY HH:mm:ss"),
  },
  updatedon: {
    type: String,
    default: moment().format("MM/DD/YYYY HH:mm:ss"),
  },
 
});

module.exports = mongoose.model("notes", NotesSchema);
