const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

// const router = require("./Routes/cnRoutes");
const { sendMail } = require("./global/sendMail");

const Route = require("./routes");

// router.route("/CN")
// app.use("/cn", router);

// app.use("/yello", (req, res) => {
//   console.log("hello");

//   res.status(200).send({message : "yeli"})
// });

app.post("/sendmail", sendMail);
Route.forEach((route) => {
  const { path, method, callback } = route;
  // const middleware = [authorizeUser, invokeMiddleware];
  const middleware = [];
  app[method](path, [...middleware], callback);
});

app.listen(5010, () => {
  console.log("Connected to server at port 5010");

  mongoose.connect(
    "mongodb://localhost:27017/createNote",
    () => {
      try {
        console.log("Connected to the database createNote");
      } catch (err) {
        console.log("Something went wrong", err);
      }
    },
    (e) => {
      console.log("Something went wrong", e);
    }
  );
});
