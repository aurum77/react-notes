import "./NoteInputToolbar.css";
import { ColorPicker } from "../Common/ColorPicker";

export const NoteInputToolbar = () => {
  return (
    <div className="noteInputToolbar">
      <ColorPicker />
      <div className="noteInputToolbar__filler" />
      <button className={`noteInput__button`}>Close</button>
    </div>
  );
};
