import { useState, useEffect } from "react";
import notesService from "./services/notesService";
import { Header, Footer, Note, Flex } from "./components";

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
        <Flex>
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </Flex>
      )}
      <Footer />
    </div>
  );
};

export default App;
