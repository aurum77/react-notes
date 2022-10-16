import { useContext } from "react";
import { Notes, Note } from "../components";
import NotesContext from "../contexts/NotesContext";
import SearchContext from "../contexts/SearchContext";

export const SearchPage = () => {
  const { notes } = useContext(NotesContext);
  const { searchValue } = useContext(SearchContext);

  const filteredNotes = notes.filter((note) =>
    note.content.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      {searchValue ? (
        <Notes>
          {filteredNotes.map((note) => (
            <Note id={note.id} note={note} />
          ))}
        </Notes>
      ) : (
        <div style={{ textAlign: "center" }}>Please input a search term</div>
      )}
    </>
  );
};
