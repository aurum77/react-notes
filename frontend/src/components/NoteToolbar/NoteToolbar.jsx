import "./NoteToolbar.css";
import { useContext } from "react";
import notesService from "../../services/notesService";
import NotesContext from "../../contexts/NotesContext";

export const NoteToolbar = ({ id, visibility }) => {
  const { notes, setNotes } = useContext(NotesContext);

  const isPinned = (id) => {
    const filteredNote = notes.filter((note) => note.id === id)[0];
    return filteredNote.pinned;
  };

  const handleNoteDeleteAction = () => {
    notesService.deleteNote(id).then((notes) => {
      setNotes(notes);
    });
  };

  const handleNoteTogglePinAction = () => {
    const filteredNote = notes.filter((note) => note.id === id)[0];
    filteredNote.pinned = !filteredNote.pinned;

    const newNotes = notes.filter((note) => note.id !== id);

    notesService.patchNote(filteredNote).then();

    setNotes([...newNotes, filteredNote]);
  };

  return (
    <div className={`noteToolbar ${visibility ? "noteToolbar--visible" : "noteToolbar--hidden"}`}>
      <div
        className={`noteToolbar__element material-symbols-outlined ${
          isPinned(id) ? "noteToolbar__element--filled" : ""
        }`}
        onClick={handleNoteTogglePinAction}
      >
        push_pin
      </div>
      <div
        className="noteToolbar__element material-symbols-outlined"
        onClick={handleNoteTogglePinAction}
      >
        palette
      </div>
      <div
        className="noteToolbar__element material-symbols-outlined"
        onClick={handleNoteDeleteAction}
      >
        add_photo_alternate
      </div>
      <div
        className="noteToolbar__element material-symbols-outlined"
        onClick={handleNoteDeleteAction}
      >
        archive
      </div>
      <div
        className="noteToolbar__element material-symbols-outlined"
        onClick={handleNoteDeleteAction}
      >
        more_vert
      </div>
    </div>
  );
};
