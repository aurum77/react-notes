import "./NoteInput.css";
import { useState, useContext } from "react";
import { NoteInputToolbar } from "../NoteInputToolbar";
import NoteContext from "../../contexts/NoteContext";
import notesService from "../../services/notesService";
import NotesContext from "../../contexts/NotesContext";

export const NoteInput = ({}) => {
  const [collapsed, setCollapsed] = useState("");

  const { notes, setNotes } = useContext(NotesContext);

  const { noteContent, setNoteContent } = useContext(NoteContext);
  const { noteTitle, setNoteTitle } = useContext(NoteContext);
  const { noteColor, setNoteColor } = useContext(NoteContext);

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
        pinned: false,
        trashed: false,
        archived: false,
      };

      notesService
        .createNote(newObject)
        .then((newNote) => setNotes(notes.concat(newNote)));

      setNoteContent("");
      setNoteTitle("");
      setNoteColor("");
    }
  };

  return (
    <form onSubmit={addNote}>
      <div className="noteInput">
        <div className={`noteInput__box ${noteColor}`}>
          <input
            className={`noteInput__title ${collapsed}`}
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
          <NoteInputToolbar>
            <button className={`noteInput__button ${collapsed}`}>Close</button>
          </NoteInputToolbar>
        </div>
      </div>
    </form>
  );
};
