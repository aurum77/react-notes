require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const json = express.json();
const port = 3001;

const Note = require("./models/note");

app.use(json);
app.use(cors());

morgan.token("json", (request, response) => {
  return JSON.stringify(request.body);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :json")
);

app.get("/api/notes", (req, res) => {
  Note.find({}).then((notes) => {
    res.json(notes);
  });
});

app.post("/api/notes", (req, res) => {
  if(req.body.content === undefined) {
    return res.status(400).json({error: "content missing"});
  }

  const props = req.body;

  const newNote = new Note({
    title: props.title,
    color: props.color,
    content: props.content,
    pinned: props.pinned,
    trashed: props.trashed,
    archived: props.archived,
    created: new Date(),
    edited: new Date(),
    tags: props.tags,
  });

  newNote.save();
  return res.status(201).json(newNote);
});

app.delete("/api/notes/:id", (req, res, next) => {
  Note.findByIdAndRemove(req.params.id).then(() => {
    res.status(204).end();
  })
  .catch(error => next(error));
});

app.patch("/api/notes/:id", (req, res) => {
  Note.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.status(200).end())
});

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});
