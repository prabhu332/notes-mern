const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const notes = require("./data/notes");

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.json(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
