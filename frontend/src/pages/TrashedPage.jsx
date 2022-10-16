import { useContext } from "react";
import { Note, Notes, Loading } from "../components";
import NotesContext from "../contexts/NotesContext";

export const TrashedPage = () => {
  const { notes, loading } = useContext(NotesContext);
  const trashedNotes = notes.filter(
    (note) => note.trashed === true && note.archived === false
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {trashedNotes.length === 0 ? (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              You do not have any trashed notes
            </div>
          ) : (
            <>
              <div className="notes__header">TRASHED</div>
              <Notes>
                {trashedNotes.map((note) => (
                  <Note key={note.id} note={note} />
                ))}
              </Notes>
            </>
          )}
        </>
      )}
    </>
  );
};
