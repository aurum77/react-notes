const Note = require("../models/note");

const notes_get_all = (req, res, next) => {
  Note.find({})
    .then((notes) => {
      res.json(notes);
    })
    .catch((error) => next(error));
};

const notes_create_note = (req, res, next) => {
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

  newNote.save().catch((error) => next(error));
  return res.status(201).json(newNote);
};

const notes_delete_note = (req, res, next) => {
  Note.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => next(error));
};

const notes_update_note = (req, res, next) => {
  Note.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.status(200).end();
    })
    .catch((error) => next(error));
};

module.exports = {
  notes_get_all,
  notes_create_note,
  notes_delete_note,
  notes_update_note,
};
