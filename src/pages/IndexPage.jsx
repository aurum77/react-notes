import { useState, useEffect, useContext } from "react";
import { Note, Notes, NoteInput } from "../components";
import NotesContext from "../contexts/NotesContext";

export const IndexPage = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div>
      <NoteInput />
      {notes.length === 0 ? (
        <div>Loading</div>
      ) : (
        <Notes>
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </Notes>
      )}
    </div>
  );
};
