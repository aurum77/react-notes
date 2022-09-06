import { useState, useEffect } from "react";
import notesService from "./services/notesService";
import { Header, Footer, Note, Notes } from "./components";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    notesService.getAll().then((notes) => {
      setNotes(notes);
    });
  }, []);

  return (
    <div>
      <Header />
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
