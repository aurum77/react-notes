import { useContext } from "react";
import { Note, Notes, NoteInput, Loading } from "../components";
import NotesContext from "../contexts/NotesContext";

export const IndexPage = () => {
  const { notes, loading } = useContext(NotesContext);

  const pinnedNotes = notes.filter(
    (note) =>
      note.pinned === true && note.archived === false && note.trashed === false
  );

  const notPinnedNotes = notes.filter(
    (note) =>
      note.pinned === false && note.archived === false && note.trashed === false
  );

  return (
    <div>
      <NoteInput />
      {loading ? (
        <Loading />
      ) : (
        <>
          {pinnedNotes.length !== 0 && (
            <>
              <div className="notes__header">PINNED</div>
              <Notes>
                {pinnedNotes.map((note) => (
                  <Note key={note.id} note={note} />
                ))}
              </Notes>
            </>
          )}
          {notPinnedNotes.length !== 0 && (
            <>
              <div className="notes__header">NOTES</div>
              <Notes>
                {notPinnedNotes.map((note) => (
                  <Note key={note.id} note={note} />
                ))}
              </Notes>
            </>
          )}
          {pinnedNotes.length === 0 && notPinnedNotes.length === 0 && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              You do not have any trashed notes
            </div>
          )}
        </>
      )}
    </div>
  );
};
