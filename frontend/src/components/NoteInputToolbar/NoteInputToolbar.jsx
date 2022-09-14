import "./NoteInputToolbar.css";
import { useContext } from "react";
import NoteContext from "../../contexts/NoteContext";

export const NoteInputToolbar = ({ children }) => {
  const { noteColor, setNoteColor } = useContext(NoteContext);

  const handleColorPick = (event) => {
    setNoteColor(event.target.id);
  };

  return (
    <div className="noteInputToolbar">
      <span
        className={`noteInputToolbar__dot ${
          noteColor === "" ? "noteInputToolbar__dot--selected" : ""
        }`}
        id=""
        onClick={handleColorPick}
      ></span>
      <span
        className={`noteInputToolbar__dot noteInputToolbar__dot--blue ${
          noteColor === "note--blue" ? "noteInputToolbar__dot--selected" : ""
        }`}
        id="note--blue"
        onClick={handleColorPick}
      />
      <span
        className={`noteInputToolbar__dot noteInputToolbar__dot--red ${
          noteColor === "note--red" ? "noteInputToolbar__dot--selected" : ""
        }`}
        id="note--red"
        onClick={handleColorPick}
      />
      <span
        className={`noteInputToolbar__dot noteInputToolbar__dot--purple ${
          noteColor === "note--purple" ? "noteInputToolbar__dot--selected" : ""
        }`}
        id="note--purple"
        onClick={handleColorPick}
      />
      <span
        className={`noteInputToolbar__dot noteInputToolbar__dot--turquoise ${
          noteColor === "note--turquoise"
            ? "noteInputToolbar__dot--selected"
            : ""
        }`}
        id="note--turquoise"
        onClick={handleColorPick}
      />
      <span
        className={`noteInputToolbar__dot noteInputToolbar__dot--green ${
          noteColor === "note--green" ? "noteInputToolbar__dot--selected" : ""
        }`}
        id="note--green"
        onClick={handleColorPick}
      />
      <span
        className={`noteInputToolbar__dot noteInputToolbar__dot--yellow ${
          noteColor === "note--yellow" ? "noteInputToolbar__dot--selected" : ""
        }`}
        id="note--yellow"
        onClick={handleColorPick}
      />
      <span
        className={`noteInputToolbar__dot noteInputToolbar__dot--orange ${
          noteColor === "note--orange" ? "noteInputToolbar__dot--selected" : ""
        }`}
        id="note--orange"
        onClick={handleColorPick}
      />
      <div className="noteInputToolbar__filler"></div>
      {children}
    </div>
  );
};
