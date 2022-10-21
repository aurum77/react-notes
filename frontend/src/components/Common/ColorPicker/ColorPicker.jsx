import "./ColorPicker.css";
import { useContext } from "react";

export const ColorPicker = ({context, visibility}) => {
  const { noteColor, setNoteColor } = useContext(context);

  const handleColorPick = (event) => {
    setNoteColor(event.target.getAttribute("color"));
  };

  return (
    <div className={`colorPicker ${visibility ? "" : "colorPicker--hidden"}`}>
      <span
        className={`colorPicker__dot material-symbols-outlined ${
          noteColor === "" ? "colorPicker__dot--selected" : ""
        }`}
        color=""
        onClick={handleColorPick}
      ></span>
      <span
        className={`colorPicker__dot material-symbols-outlined colorPicker__dot--blue ${
          noteColor === "note--blue" ? "colorPicker__dot--selected" : ""
        }`}
        color="note--blue"
        onClick={handleColorPick}
      />
      <span
        className={`colorPicker__dot material-symbols-outlined colorPicker__dot--red ${
          noteColor === "note--red" ? "colorPicker__dot--selected" : ""
        }`}
        color="note--red"
        onClick={handleColorPick}
      />
      <span
        className={`colorPicker__dot material-symbols-outlined colorPicker__dot--purple ${
          noteColor === "note--purple" ? "colorPicker__dot--selected" : ""
        }`}
        color="note--purple"
        onClick={handleColorPick}
      />
      <span
        className={`colorPicker__dot material-symbols-outlined colorPicker__dot--turquoise ${
          noteColor === "note--turquoise"
            ? "colorPicker__dot--selected"
            : ""
        }`}
        color="note--turquoise"
        onClick={handleColorPick}
      />
      <span
        className={`colorPicker__dot material-symbols-outlined colorPicker__dot--green ${
          noteColor === "note--green" ? "colorPicker__dot--selected" : ""
        }`}
        color="note--green"
        onClick={handleColorPick}
      />
      <span
        className={`colorPicker__dot material-symbols-outlined colorPicker__dot--yellow ${
          noteColor === "note--yellow" ? "colorPicker__dot--selected" : ""
        }`}
        color="note--yellow"
        onClick={handleColorPick}
      />
      <span
        className={`colorPicker__dot material-symbols-outlined colorPicker__dot--orange ${
          noteColor === "note--orange" ? "colorPicker__dot--selected" : ""
        }`}
        color="note--orange"
        onClick={handleColorPick}
      />
    </div>
  );
};
