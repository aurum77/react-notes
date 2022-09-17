import { useState, createContext } from "react";

const NoteInputContext = createContext();

export const NoteInputProvider = ({ children }) => {
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

  return <NoteInputContext.Provider value={state}>{children}</NoteInputContext.Provider>;
};

export default NoteInputContext;
