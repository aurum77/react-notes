import "./Note.css";

export const Note = ({ note }) => {
  const content = note.content.length > 45 ? note.content.substr(0, 45) + "..." : note.content;
  const title = note.content.length > 45 ? note.content.substr(0, 45) + "..." : note.content;
  return (
    <div className={`note ${note.color}`}>
        <div className="note__title">{title}</div>
        <div className={`note__content ${note.color}`}>{content}</div>
      </div>
  );
};
