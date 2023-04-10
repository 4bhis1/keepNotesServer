const NotesSchema = require("../../apis/notes/Schema");

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

exports.updateNotes = async ({ body, params }, res) => {
  try {
    console.log("in update NOtes", params);
    const { pageId } = params;

    const { note, heading, pinned, background } = body;

    // console.log("request Body", body);

    const tempData = await NotesSchema.updateOne(
      { _id: pageId },
      {
        $set: {
          heading,
          note,
          pinned,
          background,
        },
      }
    );

    // console.log("tempdata", tempData);

    res.status(200).send({ message: "Successful", result: { tempData } });
  } catch (err) {
    console.log(">>> error in updateNortes", err);
    res.status(400).send({ message: "Error in update Notes" });
  }
};

exports.getUserNotes = async ({ body, params }, res) => {
  try {
    console.log("Indside getAll Notes");

    const { userId } = params;

    const tempData = await NotesSchema.find({ createdBy: userId });

    console.log("temp Data of getAllNotes");

    res.status(200).send({ message: "Successful", result: tempData });
  } catch (err) {
    console.log(">>> Error in getAllNotes", err);
    res.status(400).send({ message: "Error in GetAllNotes" });
  }
};

exports.getPage = async ({ body, params }, res) => {
  try {
    console.log("Indside get page notes");

    const { pageId } = params;

    const tempData = await NotesSchema.find({ _id: pageId });
    console.log("\n@@@  file: SaveNotes.js:83  tempData:", tempData)

    console.log("temp Data of getAllNotes");

    res
      .status(200)
      .send({ message: "Successful", result: tempData[0] });
  } catch (err) {
    console.log(">>> Error in getAllNotes", err);
    res.status(400).send({ message: "Error in GetAllNotes" });
  }
};
