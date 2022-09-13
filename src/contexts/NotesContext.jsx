import { useState, useEffect, createContext } from "react";
import notesService from "../services/notesService";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    notesService.getAll().then((notes) => {
      setNotes(notes);
    });
  }, []);

  const state = {
    notes,
    setNotes,
  };

  return (
    <NotesContext.Provider value={state}>{children}</NotesContext.Provider>
  );
};

export default NotesContext;
