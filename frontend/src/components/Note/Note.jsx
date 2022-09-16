import "./Note.css";
import { NoteToolbar } from "../NoteToolbar";
import { useState } from "react";

export const Note = ({ note }) => {
  const [toolbarVisibility, setToolbarVisibility] = useState(false);
  const content =
    note.content.length > 400
      ? note.content.substr(0, 400) + "..."
      : note.content;
  const title =
    note.title.length > 400 ? note.title.substr(0, 400) + "..." : note.title;
  const contentSize = note.content.length > 70 ? "note__content--small" : "";

  const handleToolbarVisibility = () => {
    setToolbarVisibility(!toolbarVisibility);
  };

  return (
    <div
      className={`note ${note.color}`}
      onMouseEnter={handleToolbarVisibility}
      onMouseLeave={handleToolbarVisibility}
    >
      <div className="note__title">{title}</div>
      <div className={`note__content ${contentSize}`}>{content}</div>
      <NoteToolbar id={note.id} visibility={toolbarVisibility} />
    </div>
  );
};
