const {
  showDailyActivity,
  addActivity,
  activityDetail,
} = require("../../Controllers/createNotes/Activities");

module.exports = [
  { path: "/activities", method: "post", callback: addActivity },
  {
    path: "/activities/:activitiesId",
    method: "get",
    callback: activityDetail,
  },
  {
    path: "/activities/:activityId/dailyActivity",
    method: "get",
    callback: showDailyActivity,
  },
];
