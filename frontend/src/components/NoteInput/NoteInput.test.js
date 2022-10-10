import { render, screen } from "@testing-library/react";
import NoteInputContext from "../../contexts/NoteInputContext";
import NotesContext from "../../contexts/NotesContext";
import { NoteInput } from "./NoteInput";

const noteInputState = {
  noteColor: "note--red",
  notePinned: "bar",
  noteArchived: false,
};

const notesState = [
  {
    title: "created with a put request",
    content: "hello express server",
    color: "note--turquoise",
    pinned: false,
    trashed: false,
    archived: true,
    created: "2022-10-07T17:39:48.455Z",
    edited: "2022-10-07T17:39:48.455Z",
    tags: [],
    id: "63406464480d7f94278de659",
  },
  {
    title: "",
    content: "a",
    color: "",
    pinned: false,
    trashed: true,
    archived: false,
    created: "2022-10-07T18:49:25.924Z",
    edited: "2022-10-07T18:49:25.924Z",
    tags: [],
    id: "634074b51818788d6b3f6359",
  },
];

const renderNoteInput = () => {
  return render(
    <NotesContext.Provider value={notesState}>
      <NoteInputContext.Provider value={noteInputState}>
        <NoteInput />
      </NoteInputContext.Provider>
    </NotesContext.Provider>
  );
};

describe("NoteInput", () => {
  it("should have a title input", () => {
    renderNoteInput();
    const titleInput = screen.getByPlaceholderText(/title/i);
    expect(titleInput).toBeInTheDocument;
  });

  it("should have a content input", () => {
    renderNoteInput();
    const titleInput = screen.getByPlaceholderText(/take a note.../i);
    expect(titleInput).toBeInTheDocument;
  });
});
