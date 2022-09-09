import { useState, useEffect } from "react";
import notesService from "./services/notesService";
import { Header, Footer, Note, Notes, NoteInput } from "./components";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteContent, setNoteContent] = useState("");

  useEffect(() => {
    notesService.getAll().then((notes) => {
      setNotes(notes);
    });
  }, []);

  const handleInputValueChange = (event) => {
    setNoteContent(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    const newNote = {
      "id": Math.floor(Math.random() * 1000),
      "title": "",
      "content": noteContent,
      "color": "note--yellow",
      "pinned": false,
      "trashed": false,
      "archived": false,
      "created": new Date(),
      "edited": new Date()
    }

    const newNotes = [
      ...notes,
      newNote,
    ];

    setNotes(newNotes);
    setNoteContent("");
  };

  return (
    <div>
      <Header />
      <NoteInput
        inputValue={noteContent}
        onChange={handleInputValueChange}
        onSubmit={addNote}
      />
      {notes.length === 0 ? (
        <div>Loading</div>
      ) : (
        <Notes>
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </Notes>
      )}
      <Footer />
    </div>
  );
};

export default App;
