const NotesSchema = require("../../Schemas/createNotes/NotesSchema");

exports.saveNotes = async (req, res) => {
  try {
    console.log("Inside saveNotes");
    const { createdBy, note, heading, pinned, background } = req.body;
    console.log(
      "\n\n 🚀 ~ file: SaveNotes.js:7 ~ exports.saveNotes= ~ note",
      note
    );

    const tempData = await NotesSchema.create({
      createdBy,
      note,
      heading,
      pinned,
      background,
    });

    console.log("__id", tempData);

    res.status(200).send({ message: "Successful", result: tempData["id"] });
  } catch (err) {
    console.log(">>> error in saveNotes", err);
    res.status(400).send({ message: "Error in save Notes" });
  }
};

exports.updateNotes = async (req, res) => {
  try {
    console.log("in update NOtes");

    const { pageId, note, heading, pinned, background, updatedon } = req.body;

    console.log("request Body", req.body);

    const tempData = await NotesSchema.updateOne(
      { _id: pageId },
      {
        $set: {
          heading,
          note,
          pinned,
          background,
          updatedon,
        },
      }
    );

    console.log("tempdata", tempData);

    res.status(200).send({ message: "Successful", result: { tempData } });
  } catch (err) {
    console.log(">>> error in updateNortes", err);
    res.status(400).send({ message: "Error in update Notes" });
  }
};

exports.getAllNotes = async (req, res) => {
  try {
    console.log("Indside getAll Notes");

    const { userId } = req.body;

    const tempData = await NotesSchema.find({ createdBy: userId });

    console.log("temp Data of getAllNotes");

    res.status(200).send({ message: "Successful", result: tempData });
  } catch (err) {
    console.log(">>> Error in getAllNotes", err);
    res.status(400).send({ message: "Error in GetAllNotes" });
  }
};

exports.getPage = async (req, res) => {
  try {
    console.log("Indside getAll Notes");

    const { pageId } = req.body;

    const tempData = await NotesSchema.find({ _id: pageId });

    console.log("temp Data of getAllNotes");

    res
      .status(200)
      .send({ message: "Successful", result: tempData[0]["note"] });
  } catch (err) {
    console.log(">>> Error in getAllNotes", err);
    res.status(400).send({ message: "Error in GetAllNotes" });
  }
};
