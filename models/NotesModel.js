// create a schema for notes app
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const NotesSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// export the model
const Notes = mongoose.model("Notes", NotesSchema);
module.exports = Notes;
