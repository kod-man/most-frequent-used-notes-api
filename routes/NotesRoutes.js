const express = require("express");
const router = express.Router();

router.post("/your-route", (req, res) => {
  console.log(req.body);
  try {
    res.send("Hello World");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
