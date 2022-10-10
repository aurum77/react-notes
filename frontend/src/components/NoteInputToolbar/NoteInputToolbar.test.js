import { render, screen } from "@testing-library/react";
import NoteInputContext from "../../contexts/NoteInputContext";
import { NoteInputToolbar } from "./NoteInputToolbar";

const noteInputState = {
  notePinned: true,
  noteArchived: true,
};

const renderNoteInputToolbar = () => {
  return render(
    <NoteInputContext.Provider value={noteInputState}>
      <NoteInputToolbar />
    </NoteInputContext.Provider>
  );
};
describe("NoteInputToolbar", () => {
  it("should have a pinned icon", () => {
    renderNoteInputToolbar();
    const pinnedIcon = screen.getByText("push_pin");
    expect(pinnedIcon).toBeInTheDocument;
  });

  it("should have a archived icon", () => {
    renderNoteInputToolbar();
    const archivedIcon = screen.getByText("archive");
    expect(archivedIcon).toBeInTheDocument;
  });

  it("should have a palette icon", () => {
    renderNoteInputToolbar();
    const paletteIcon = screen.getByText("palette");
    expect(paletteIcon).toBeInTheDocument;
  });

  it("should have a photo icon", () => {
    renderNoteInputToolbar();
    const photoIcon = screen.getByText("add_photo_alternate");
    expect(photoIcon).toBeInTheDocument;
  });
});
