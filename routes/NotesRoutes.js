const express = require("express");
const Notes = require("../models/NotesModel");
const validateNote = require("../src/utils/validationNote");
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const getAllNotes = await Notes.find();
    res.status(200).json(getAllNotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/add", async (req, res) => {
  const { keyword, note, description } = req.body;
  try {
    const { errors, valid } = validateNote(req.body);
    if (!valid) {
      return res.status(400).json(errors);
    }
    const newNote = new Notes({
      keyword,
      description,
      note,
    });
    const savedNote = await newNote.save();
    res.status(200).json(savedNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
