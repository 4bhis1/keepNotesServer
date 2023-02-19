const mongoose = require("mongoose");
const moment = require("moment");

const { Schema } = mongoose;

const ActivitesSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: "users" },
  activityName: String,
  activityType: String,
  activityUnit: String,
  createdon: {
    type: String,
    default: moment().format("MM/DD/YYYY HH:mm:ss"),
  },
  updatedon: {
    type: String,
    default: moment().format("MM/DD/YYYY HH:mm:ss"),
  },
});

module.exports = mongoose.model("activities", ActivitesSchema);
