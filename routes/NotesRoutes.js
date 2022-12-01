const express = require("express");
const Notes = require("../models/NotesModel");
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const getAllNotes = await Notes.find();
    res.status(200).json(getAllNotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
