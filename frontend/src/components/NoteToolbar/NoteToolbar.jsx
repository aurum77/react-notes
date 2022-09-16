import "./NoteToolbar.css";
import { useContext } from "react";
import notesService from "../../services/notesService";
import NotesContext from "../../contexts/NotesContext";

export const NoteToolbar = ({ id }) => {
  const { setNotes } = useContext(NotesContext);

  const handleNoteDeleteAction = () => {
    notesService.deleteNote(id).then((notes) => {
      setNotes(notes);
    });
  };

  return (
    <div className="noteToolbar">
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
