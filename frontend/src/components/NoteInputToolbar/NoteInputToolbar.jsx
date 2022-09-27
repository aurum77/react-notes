import "./NoteInputToolbar.css";
import { ColorPicker } from "../Common/ColorPicker";

export const NoteInputToolbar = () => {
  return (
    <div className="noteInputToolbar">
      <div className="noteInputToolbar__element material-symbols-outlined">
        push_pin
      </div>
      <div className="noteInputToolbar__element material-symbols-outlined">
        archive
      </div>
      <div className="noteInputToolbar__element material-symbols-outlined">
        palette
      </div>
      <div className="noteInputToolbar__element material-symbols-outlined">
        add_photo_alternate
      </div>
      {/* <ColorPicker /> */}
      <div className="noteInputToolbar__filler" />
      <button className={`noteInput__button`}>Close</button>
    </div>
  );
};
