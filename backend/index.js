const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const json = express.json();
const port = 3001;

app.use(json);
app.use(cors());

morgan.token("json", (request, response) => {
  return JSON.stringify(request.body);
});
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :json")
);

let notes = [
  {
    id: 1,
    title: "this is a title",
    content: "this is a note",
    color: "note--turquoise",
    pinned: true,
    trashed: false,
    archived: false,
    created: "Sat Aug 20 2022 15:48:06",
    edited: "Sat Aug 20 2022 15:48:06",
  },
  {
    id: 2,
    title: "",
    content: "im a cat",
    color: "note--green",
    pinned: false,
    trashed: false,
    archived: false,
    created: "Sat Aug 12 2022 18:48:06",
    edited: "Sat Aug 20 2022 15:48:06",
  },
  {
    id: 3,
    title: "",
    content: "meow",
    color: "note--turquoise",
    pinned: true,
    trashed: false,
    archived: false,
    created: "Sat Aug 13 2022 15:45:06",
    edited: "Sat Aug 20 2022 15:48:06",
  },
  {
    id: 4,
    title: "",
    content: "yellow cat",
    color: "note--yellow",
    pinned: false,
    trashed: false,
    archived: false,
    created: "Sat Aug 14 2022 11:48:06",
    edited: "Sat Aug 20 2022 15:48:06",
  },
  {
    id: 5,
    title: "",
    content: "hello from express",
    color: "note--orange",
    pinned: false,
    trashed: false,
    archived: false,
    created: "Sat Aug 12 2022 11:48:06",
    edited: "Sat Aug 12 2022 11:48:06",
  },
  {
    id: 6,
    title: "",
    content: "hello from express",
    color: "note--darkblue",
    pinned: false,
    trashed: false,
    archived: false,
    created: "Sat Aug 12 2022 11:48:06",
    edited: "Sat Aug 20 2022 15:48:06",
  },
  {
    id: 7,
    title: "",
    content:
      "wow continuous text AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    color: "note--turquoise",
    pinned: false,
    trashed: false,
    archived: false,
    created: "Sat Aug 12 2022 11:48:06",
    edited: "Sat Aug 20 2022 15:48:06",
  },
  {
    id: 8,
    title: "",
    content: "some text shorter than 70 chars expect normal font",
    color: "",
    pinned: false,
    trashed: false,
    archived: false,
    created: "Sat Aug 12 2022 11:48:06",
    edited: "Sat Aug 20 2022 15:48:06",
  },
  {
    id: 9,
    title: "unnecessarily long text for checking overflows",
    content:
      "Do not use the same id when lazily copying and pasting this json object CLARKSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOON",
    color: "note--red",
    pinned: false,
    trashed: false,
    archived: false,
    created: "Sat Aug 12 2022 11:48:06",
    edited: "Sat Aug 20 2022 15:48:06",
  },
  {
    id: 10,
    title: "",
    content:
      "some text longer than 70 chars lalalalalalalalalalalalalalalalalalalala expect small font",
    color: "note--turquoise",
    pinned: false,
    trashed: false,
    archived: false,
    created: "Sat Aug 12 2022 11:48:06",
    edited: "Sat Aug 20 2022 15:48:06",
  },
];

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/api/notes", (req, res) => {
  return res.json(notes);
});

app.post("/api/notes", (req, res) => {
  const props = req.body;

  let noteId = Math.floor(Math.random() * 100000);
  while (notes.find((note) => note.id === noteId)) {
    noteId = Math.floor(Math.random() * 100000);
  }

  const newNote = {
    id: noteId,
    title: props.title,
    color: props.color,
    content: props.content,
    pinned: props.pinned,
    trashed: props.trashed,
    archived: props.archived,
    created: new Date(),
    edited: new Date(),
  };

  notes.push(newNote);
  return res.status(201).json(newNote);
});

app.delete("/api/notes/:id", (req, res) => {
  const noteId = Number(req.params.id);
  notes = notes.filter((note) => note.id !== noteId);
  return res.status(200).json(notes);
});

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});
