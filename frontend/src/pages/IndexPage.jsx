import { useContext } from "react";
import { Note, Notes, NoteInput, Loading } from "../components";
import NotesContext from "../contexts/NotesContext";

export const IndexPage = () => {
  const { notes, loading } = useContext(NotesContext);

  return (
    <div>
      <NoteInput />
      {!loading ? (
        <Notes>
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </Notes>
      ) : (
        <Loading />
      )}
    </div>
  );
};
