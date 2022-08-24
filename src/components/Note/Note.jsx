import "./Note.css";

export const Note = ({ note }) => {
  return (
    <div className={`note ${note.color}`}>
        <div className="note__title">{note.title}</div>
        <div className={`note__content ${note.color}`}>{note.content}</div>
      </div>
  );
};
