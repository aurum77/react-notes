import { useState, useEffect } from "react";
import notesService from "./services/notesService";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notes = notesService.getAll().then((notes) => {
      setNotes(notes);
    });
  }, []);

  return (
    <div>
      {notes.length === 0 ? (
        <div>Loading</div>
      ) : (
        <div>
          <ul>
            {notes.map((note) => (
              <li>{note.content}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
