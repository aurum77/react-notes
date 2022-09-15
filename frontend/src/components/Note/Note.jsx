import "./Note.css";
import { NoteToolbar } from "../NoteToolbar";

export const Note = ({ note }) => {
  const content =
    note.content.length > 400
      ? note.content.substr(0, 400) + "..."
      : note.content;
  const title =
    note.title.length > 400 ? note.title.substr(0, 400) + "..." : note.title;
  const contentSize = note.content.length > 70 ? "note__content--small" : "";

  return (
    <div className={`note ${note.color}`}>
      <div className="note__title">{title}</div>
      <div className={`note__content ${contentSize}`}>{content}</div>
      <NoteToolbar id={note.id}/>
    </div>
  );
};
