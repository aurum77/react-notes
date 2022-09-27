import "./NoteInput.css";
import { useState, useContext } from "react";
import { NoteInputToolbar } from "../NoteInputToolbar";
import NotesContext from "../../contexts/NotesContext";
import NoteInputContext from "../../contexts/NoteInputContext";
import notesService from "../../services/notesService";

export const NoteInput = () => {
  const [hidden, sethidden] = useState("");

  const { notes, setNotes } = useContext(NotesContext);

  const {
    noteContent,
    setNoteContent,
    noteTitle,
    setNoteTitle,
    noteColor,
    setNoteColor,
    notePinned,
    setNotePinned,
    noteArchived,
    setNoteArchived,
  } = useContext(NoteInputContext);

  const handleInputContentChange = (event) => {
    setNoteContent(event.target.value);
  };

  const handleInputTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    if (noteTitle || noteContent) {
      const newObject = {
        title: noteTitle,
        content: noteContent,
        color: noteColor,
        pinned: notePinned,
        trashed: false,
        archived: noteArchived,
        tags: [],
      };

      notesService
        .createNote(newObject)
        .then((newNote) => setNotes(notes.concat(newNote)));

      setNoteContent("");
      setNoteTitle("");
      setNoteColor("");
      setNotePinned(false);
      setNoteArchived(false);
    }
  };

  return (
    <form onSubmit={addNote}>
      <div className="noteInput">
        <div className={`noteInput__box ${noteColor}`}>
          <input
            className={`noteInput__title ${hidden}`}
            type="text"
            placeholder="Title"
            value={noteTitle}
            onChange={handleInputTitleChange}
          />
          <input
            className="noteInput__content"
            type="text"
            placeholder="Take a note..."
            value={noteContent}
            onChange={handleInputContentChange}
          />
          <NoteInputToolbar />
        </div>
      </div>
    </form>
  );
};
