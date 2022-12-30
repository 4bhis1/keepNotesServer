const UsersSchema = require("../../Schemas/createNotes/UsersSchema");

exports.login = async (req, res) => {
  try {
    console.log("Inside signup")
    const { firstName, lastName, phone, email, subscribed, pswrd } = req.body;

    if (firstName && phone && email && pswrd) {
      const id = await UsersSchema.create({
        firstName,
        lastName,
        phone,
        email,
        // subscribed,
        pswrd,
      });

      console.log("__id", id);


    } else {
      res.status(400).send({ message: "All Data needed" });
    }

    res.status(200).send({ message: "Successfull", result: {...id} });
  } catch (err) {
    res.status(400).send({ message: "Error in Login" });
  }
};

exports.signup = async (req, res) => {
  try {
    res.status(200).json({ message: "Succesfully signed in" });
  } catch (err) {
    res.status(400).send({ message: "Error in Signup" });
  }
};
