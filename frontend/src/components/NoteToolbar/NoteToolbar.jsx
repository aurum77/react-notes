import "./NoteToolbar.css";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import notesService from "../../services/notesService";
import NotesContext from "../../contexts/NotesContext";
import { ColorPicker } from "../Common/ColorPicker";
import NoteModalContext from "../../contexts/NoteModalContext";

export const NoteToolbar = ({ id, visibility }) => {
  const { notes, setNotes } = useContext(NotesContext);
  const [colorPickerVisibility, setColorPickerVisibility] = useState(false);

  const location = useLocation();

  const isPinned = (id) => {
    const filteredNote = notes.filter((note) => note.id === id)[0];
    return filteredNote.pinned;
  };

  const handleNoteToggleTrashed = () => {
    const filteredNote = notes.filter((note) => note.id === id)[0];
    filteredNote.trashed = !filteredNote.trashed;

    filteredNote.archived = false;
    filteredNote.pinned = false;

    const newNotes = notes.filter((note) => note.id !== id);

    notesService.patchNote(filteredNote).then();

    setNotes([...newNotes, filteredNote]);
  };

  const handleNoteTogglePinned = () => {
    const filteredNote = notes.filter((note) => note.id === id)[0];
    filteredNote.pinned = !filteredNote.pinned;

    filteredNote.archived = false;
    filteredNote.trashed = false;

    const newNotes = notes.filter((note) => note.id !== id);

    notesService.patchNote(filteredNote).then();

    setNotes([...newNotes, filteredNote]);
  };

  const handleNoteToggleArchived = () => {
    const filteredNote = notes.filter((note) => note.id === id)[0];
    filteredNote.archived = !filteredNote.archived;

    filteredNote.pinned = false;
    filteredNote.trashed = false;

    const newNotes = notes.filter((note) => note.id !== id);

    notesService.patchNote(filteredNote).then();

    setNotes([...newNotes, filteredNote]);
  };

  const handleNoteDelete = () => {
    const filteredNote = notes.filter((note) => note.id === id)[0];
    const newNotes = notes.filter((note) => note.id !== id);

    notesService.deleteNote(filteredNote.id);

    setNotes(newNotes);
  };

  const handleColorPickerVisibility = () => {
    setColorPickerVisibility((colorPickerVisibility) => !colorPickerVisibility);
  };

  switch (location.pathname) {
    default:
      return (
        <div
          className={`noteToolbar ${
            visibility ? "noteToolbar--visible" : "noteToolbar--hidden"
          }`}
        >
          <div
            className={`noteToolbar__element material-symbols-outlined ${
              isPinned(id) ? "noteToolbar__element--filled" : ""
            }`}
            onClick={handleNoteTogglePinned}
          >
            push_pin
          </div>
          <div
            className="noteToolbar__element material-symbols-outlined"
            onClick={handleNoteToggleArchived}
          >
            archive
          </div>
          <div
            className="noteToolbar__element material-symbols-outlined"
            onClick={handleNoteToggleTrashed}
          >
            delete
          </div>
          <div
            className="noteToolbar__element material-symbols-outlined"
            onClick={handleColorPickerVisibility}
          >
            palette
          </div>
          <div
            className="noteToolbar__element material-symbols-outlined"
            onClick={handleNoteToggleTrashed}
          >
            add_photo_alternate
          </div>
          <ColorPicker
            context={NoteModalContext}
            visibility={colorPickerVisibility}
          />
        </div>
      );

    case "/trashed":
      return (
        <div
          className={`noteToolbar ${
            visibility ? "noteToolbar--visible" : "noteToolbar--hidden"
          }`}
        >
          <div
            className="noteToolbar__element noteToolbar__element--filled material-symbols-outlined"
            onClick={handleNoteToggleTrashed}
          >
            restore_from_trash
          </div>
          <div
            className="noteToolbar__element noteToolbar__element--filled material-symbols-outlined"
            onClick={handleNoteDelete}
          >
            delete_forever
          </div>
        </div>
      );
  }
};
