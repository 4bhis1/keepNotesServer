const {
  DailyActivitesSchema,
  ActivitesSchema,
} = require("../../apis/activity/Schema");

exports.addActivity = async (req, res) => {
  const { body } = req;
  const data = await ActivitesSchema.create(body);
  return data;
};

exports.activityDetail = async (req, res) => {};

exports.addDailyActivity = async (req, res) => {
  const { body } = req;
  const data = await DailyActivitesSchema.create(body);
  return data;
};

exports.showDailyActivity = async (req, res) => {
  const { params } = req;

  return ["hello"];
};
