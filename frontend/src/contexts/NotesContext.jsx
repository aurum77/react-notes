import { useState, useEffect, createContext } from "react";
import notesService from "../services/notesService";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    notesService.getAll().then((notes) => {
      setNotes(notes);
      setLoading(false);
    });
  }, []);

  const state = {
    notes,
    setNotes,
    loading,
    setLoading,
  };

  return (
    <NotesContext.Provider value={state}>{children}</NotesContext.Provider>
  );
};

export default NotesContext;
