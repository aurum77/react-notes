import "./NoteToolbar.css";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import notesService from "../../services/notesService";
import NotesContext from "../../contexts/NotesContext";

export const NoteToolbar = ({ id, visibility }) => {
  const { notes, setNotes } = useContext(NotesContext);
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
            onClick={handleNoteToggleTrashed}
          >
            palette
          </div>
          <div
            className="noteToolbar__element material-symbols-outlined"
            onClick={handleNoteToggleTrashed}
          >
            add_photo_alternate
          </div>
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
            className="noteToolbar__element material-symbols-outlined"
            onClick={handleNoteToggleTrashed}
          >
            restore_from_trash
          </div>
          <div
            className="noteToolbar__element material-symbols-outlined"
            onClick={handleNoteToggleTrashed}
          >
            delete_forever
          </div>
        </div>
      );
  }
};
