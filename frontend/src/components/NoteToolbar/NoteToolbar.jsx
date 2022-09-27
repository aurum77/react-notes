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
    const filtered = notes.filter(note => note.id !== id)
    notesService.deleteNote(id).then(() => {
      setNotes(filtered);
    });
  };

  const handleNoteTogglePinned = () => {
    const filteredNote = notes.filter((note) => note.id === id)[0];
    filteredNote.pinned = !filteredNote.pinned;

    if(filteredNote.archived) {
      filteredNote.archived = !filteredNote.archived
    }

    const newNotes = notes.filter((note) => note.id !== id);

    notesService.patchNote(filteredNote).then();

    setNotes([...newNotes, filteredNote]);
  };

  const handleNoteToggleArchived = () => {
    const filteredNote = notes.filter((note) => note.id === id)[0];
    filteredNote.archived = !filteredNote.archived;

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
};
