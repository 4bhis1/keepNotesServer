const mongoose = require("mongoose");

const { Schema } = mongoose;

const DateWiseActivitiesSchema = new Schema({
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
});

module.exports = mongoose.model("dateWiseActivites", DateWiseActivitiesSchema);
