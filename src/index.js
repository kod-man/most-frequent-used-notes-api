require("dotenv").config();
//import mongoose
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const NotesRoutes = require("../routes/NotesRoutes");

const app = express();

app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log("Request received");
  next();
});

// routes
app.use("/", NotesRoutes);
const PORT = process.env.PORT || 3000;

// connect to db with mongoose
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
