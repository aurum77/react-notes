import { useContext } from "react";
import { Note, Notes, Loading } from "../components";
import NotesContext from "../contexts/NotesContext";

export const ArchivedPage = () => {
  const { notes, loading } = useContext(NotesContext);
  const archivedNotes = notes.filter((note) => note.archived === true);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="notes__header">ARCHIVED</div>
          {archivedNotes.length === 0 ? (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              You do not have any archived notes
            </div>
          ) : (
            <Notes>
              {archivedNotes.map((note) => (
                <Note key={note.id} note={note} />
              ))}
            </Notes>
          )}
        </div>
      )}
    </div>
  );
};
