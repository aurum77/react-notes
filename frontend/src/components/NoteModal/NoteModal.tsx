import "./NoteModal.css";
import { Dispatch, SetStateAction, useContext, useRef } from "react";
import NotesContext from "../../contexts/NotesContext";
import { NoteToolbar } from "../NoteToolbar";
import notesService from "../../services/notesService";

type NoteModalProps = {
  id: string;
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
};

export const NoteModal = ({
  id,
  visibility,
  setVisibility,
}: NoteModalProps) => {
  const { notes, setNotes } = useContext(NotesContext);
  const noteModalTitleRef = useRef<HTMLTextAreaElement>(null);
  const noteModalContentRef = useRef<HTMLTextAreaElement>(null);

  const note: Note = notes.filter((note: Note) => note.id === id)[0];

  const handleModalSubmit = () => {
    const newNote: Note = {
      title: noteModalTitleRef.current?.value as string,
      content: noteModalContentRef.current?.value as string,
      color: note.color,
      pinned: note.pinned,
      trashed: note.trashed,
      archived: note.archived,
      created: note.created,
      edited: new Date(),
      tags: note.tags,
      id: note.id,
    };

    const newNotes = notes.map((note: Note) => note.id === newNote.id ? newNote : note)

    notesService.patchNote(newNote).then();

    setNotes(newNotes);
    setVisibility((visibility) => !visibility);
  };

  return (
    <div className={`noteModal ${visibility ? "" : "noteModal--hidden"}`}>
      <div className="noteModal__wrapper">
        <textarea
          className="noteModal__title"
          placeholder="Title"
          ref={noteModalTitleRef}
        >
          {note.title}
        </textarea>
        <textarea
          className="noteModal__content"
          placeholder="Note"
          ref={noteModalContentRef}
        >
          {note.content}
        </textarea>
        <div className="noteModal__toolbar">
          <NoteToolbar id={note.id} visibility={true} />
          <button className="noteModal__button" onClick={handleModalSubmit}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
