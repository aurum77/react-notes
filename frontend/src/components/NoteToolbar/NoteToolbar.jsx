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
      <div className="noteToolbar__element" onClick={handleNoteDeleteAction}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
          alt="delete a note"
        />
      </div>
    </div>
  );
};
