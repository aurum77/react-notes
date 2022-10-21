import "./NoteInput.css";
import { useContext, useRef } from "react";
import { NoteInputToolbar } from "../NoteInputToolbar";
import NotesContext from "../../contexts/NotesContext";
import NoteInputContext from "../../contexts/NoteInputContext";
import notesService from "../../services/notesService";

export const NoteInput = () => {
  const { notes, setNotes } = useContext(NotesContext);

  const noteTitleRef = useRef();
  const noteContentRef = useRef();

  const {
    noteColor,
    setNoteColor,
    notePinned,
    setNotePinned,
    noteArchived,
    setNoteArchived,
  } = useContext(NoteInputContext);

  const addNote = (event) => {
    event.preventDefault();
    if (noteTitleRef.current.value || noteContentRef.current.value) {
      const newNote = {
        title: noteTitleRef.current.value,
        content: noteContentRef.current.value,
        color: noteColor,
        pinned: notePinned,
        trashed: false,
        archived: noteArchived,
        tags: [],
      };

      notesService
        .createNote(newNote)
        .then((newNote) => setNotes(notes.concat(newNote)));

      noteTitleRef.current.value = "";
      noteContentRef.current.value = "";
      setNoteColor("");
      setNotePinned(false);
      setNoteArchived(false);
    }
  };

  return (
    <form onSubmit={addNote}>
      <div className="noteInput">
        <div className={`noteInput__box ${noteColor}`}>
          <textarea
            className="noteInput__title"
            type="text"
            placeholder="Title"
            ref={noteTitleRef}
          />
          <textarea
            className="noteInput__content"
            type="text"
            placeholder="Take a note..."
            ref={noteContentRef}
          />
          <NoteInputToolbar />
        </div>
      </div>
    </form>
  );
};
