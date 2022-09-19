import "./NoteInputToolbar.css";
import { ColorPicker } from "../Common/ColorPicker";

export const NoteInputToolbar = ({ children }) => {
  return (
    <div className="noteInputToolbar">
      <ColorPicker />
      <div className="noteInputToolbar__filler"></div>
      {children}
      <button className={`noteInput__button`}>Close</button>
    </div>
  );
};
