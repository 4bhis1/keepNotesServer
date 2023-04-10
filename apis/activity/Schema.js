const mongoose = require("mongoose");

const { Schema } = mongoose;

const dateWiseActivitiesSchema = new Schema(
  {
    date: {
      type: String,
      unique: true,
    },
    activities: [
      {
        activityId: { type: Schema.Types.ObjectId, ref: "activities" },
        dataOfActivity: String,
      },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

module.exports = mongoose.model("dateWiseActivites", dateWiseActivitiesSchema);

const activitesSchema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ["boolean", "number"],
    },
    boolean: Boolean,
    value: String,
    unit: String,
    createdBy: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
exports.ActivitesSchema = mongoose.model("activities", activitesSchema);
