// router.route("/credentials/login").post(login)

const { login } = require("../../Controllers/createNotes/Credentials");

module.exports = [
  {
    path: "/credentials/login",
    method: "post",
    callback: login,
  },
  
];
