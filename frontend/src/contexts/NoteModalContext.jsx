import { createContext, useState } from "react";

const NoteModalContext = createContext();

export const NoteModalProvider = ({ children }) => {
  const [noteColor, setNoteColor] = useState("");

  const state = {
    noteColor,
    setNoteColor,
  };
  return (
    <NoteModalContext.Provider value={state}>
      {children}
    </NoteModalContext.Provider>
  );
};

export default NoteModalContext;
