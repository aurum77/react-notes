import "./NoteInputToolbar.css";
import { ColorPicker } from "../Common/ColorPicker";
import NoteInputContext from "../../contexts/NoteInputContext";
import { useContext, useState } from "react";

export const NoteInputToolbar = () => {
  const { notePinned, setNotePinned, noteArchived, setNoteArchived } =
    useContext(NoteInputContext);
  const [colorPickerVisibility, setColorPickerVisibility] = useState(false);

  const handleNotePinned = () => {
    setNotePinned(!notePinned);
    setNoteArchived(false);
  };

  const handleNoteArchived = () => {
    setNoteArchived(!noteArchived);
    setNotePinned(false);
  };

  const handleColorPickerVisibility = () => {
    setColorPickerVisibility((colorPickerVisibility) => !colorPickerVisibility);
  };

  return (
    <div className="noteInputToolbar">
      <div
        className={`noteInputToolbar__element material-symbols-outlined
    ${notePinned ? "noteInputToolbar__element--filled" : ""}
    `}
        onClick={handleNotePinned}
      >
        push_pin
      </div>
      <div
        className={`noteInputToolbar__element material-symbols-outlined
      ${noteArchived ? "noteInputToolbar__element--filled" : ""}
      `}
        onClick={handleNoteArchived}
      >
        archive
      </div>
      <div
        className="noteInputToolbar__element material-symbols-outlined"
        onClick={handleColorPickerVisibility}
      >
        palette
      </div>
      <div className="noteInputToolbar__element material-symbols-outlined">
        add_photo_alternate
      </div>
      <ColorPicker
        context={NoteInputContext}
        visibility={colorPickerVisibility}
      />
      <div className="noteInputToolbar__filler" />
      <button className={`noteInput__button`}>Close</button>
    </div>
  );
};
