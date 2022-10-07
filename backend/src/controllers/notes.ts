import { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";
import Note from "../models/note";

export const notes_get_all = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Note.find({})
    .then((notes) => {
      res.json(notes);
    })
    .catch((error) => next(error));
};

export const notes_create_note = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const props = req.body;

  const newNote = new Note({
    _id: new Types.ObjectId(),
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

export const notes_delete_note = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).end();
  }

  Note.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => next(error));
};

export const notes_update_note = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Note.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.status(200).end();
    })
    .catch((error) => next(error));
};
