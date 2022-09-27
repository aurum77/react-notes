import { useState, createContext } from "react";

const NoteInputContext = createContext();

export const NoteInputProvider = ({ children }) => {
  const [noteContent, setNoteContent] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteColor, setNoteColor] = useState("");
  const [notePinned, setNotePinned] = useState(false);
  const [noteArchived, setNoteArchived] = useState(false);

  const state = {
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
  };

  return (
    <NoteInputContext.Provider value={state}>
      {children}
    </NoteInputContext.Provider>
  );
};

export default NoteInputContext;
