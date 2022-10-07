import { NextFunction, Request, Response } from "express";
import Note from "../models/note";

type ControllerParams = {
  req: Request;
  res: Response;
  next: NextFunction;
};

export const notes_get_all = ({ req, res, next }: ControllerParams) => {
  Note.find({})
    .then((notes) => {
      res.json(notes);
    })
    .catch((error) => next(error));
};

export const notes_create_note = ({ req, res, next }: ControllerParams) => {
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

export const notes_delete_note = ({ req, res, next }: ControllerParams) => {
  Note.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => next(error));
};

export const notes_update_note = ({ req, res, next }: ControllerParams) => {
  Note.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.status(200).end();
    })
    .catch((error) => next(error));
};
