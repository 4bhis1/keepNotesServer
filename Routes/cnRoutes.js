const express = require("express");
const { showActivity, addActivity, showDailyActivity } = require("../Controllers/createNotes/Activities");
const { login } = require("../Controllers/createNotes/Credentials");
const { saveNotes, updateNotes, getAllNotes, getPage } = require("../Controllers/createNotes/SaveNotes");

const router = express.Router();

router.route("/credentials/login").post(login)


router.route("/activities").get(showActivity).post(addActivity)
router.route("/activities/:activityId/dailyActivity").get(showDailyActivity)

// router.route("/re").post((req, res) => {
//   console.log("ree");
//   res.status(200).send({ message: "refc" });
// });

module.exports = router;
