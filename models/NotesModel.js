// create a schema for notes app
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const NotesSchema = new Schema(
  {
    keyword: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    note: {
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
