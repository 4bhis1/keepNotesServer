const {
  saveNotes,
  updateNotes,
  getUserNotes,
  getPage,
} = require("../../Controllers/createNotes/SaveNotes");

// router.route("/notes").post(saveNotes).patch(updateNotes);
// router.route("/getAllNotes").post(getAllNotes);
// router.route("/getPage").post(getPage);

module.exports = [
  {
    path: "/userNotes/:userId",
    method: "get",
    callback: getUserNotes,
  },
  {
    path: "/notes",
    method: "post",
    callback: saveNotes,
  },
  {
    path: "/notes/:pageId",
    method: "post",
    callback: updateNotes,
  },
  {
    path: "/notes/:pageId",
    method: "get",
    callback: getPage,
  },
];
