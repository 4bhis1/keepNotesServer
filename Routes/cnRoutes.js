const express = require("express");
const { login } = require("../Controllers/createNotes/Credentials");
const { saveNotes, updateNotes, getAllNotes, getPage } = require("../Controllers/createNotes/SaveNotes");

const router = express.Router();

router.route("/credentials/login").post(login)
router.route("/notes").post(saveNotes).patch(updateNotes)
router.route("/getAllNotes").post(getAllNotes)
router.route("/getPage").post(getPage)

// router.route("/re").post((req, res) => {
//   console.log("ree");
//   res.status(200).send({ message: "refc" });
// });

module.exports = router;
