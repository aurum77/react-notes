import { useState, createContext } from "react";

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [noteContent, setNoteContent] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteColor, setNoteColor] = useState("");

  const state = {
    noteContent,
    setNoteContent,
    noteTitle,
    setNoteTitle,
    noteColor,
    setNoteColor,
  };

  return <NoteContext.Provider value={state}>{children}</NoteContext.Provider>;
};

export default NoteContext;
