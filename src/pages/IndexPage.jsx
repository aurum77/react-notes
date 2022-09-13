import { useState, useEffect } from "react";
import { Note, Notes, NoteInput } from "../components";
import notesService from "../services/notesService";

export const IndexPage = () => {
  const [notes, setNotes] = useState([]);
  const [noteContent, setNoteContent] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  useEffect(() => {
    notesService.getAll().then((notes) => {
      setNotes(notes);
    });
  }, []);

  const handleInputContentChange = (event) => {
    setNoteContent(event.target.value);
  };

  const handleInputTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    if (noteTitle || noteContent) {
      const newObject = {
        title: noteTitle,
        content: noteContent,
        color: "note--yellow",
        pinned: false,
        trashed: false,
        archived: false,
      };

      notesService
        .createNote(newObject)
        .then((newNote) => setNotes(notes.concat(newNote)));

      setNoteContent("");
      setNoteTitle("");
    }
  };


  return(
    <div>
      <NoteInput
        inputTitle={noteTitle}
        inputContent={noteContent}
        handleInputContentChange={handleInputContentChange}
        handleInputTitleChange={handleInputTitleChange}
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
    </div>
  )
}
