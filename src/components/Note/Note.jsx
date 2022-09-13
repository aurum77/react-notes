import "./Note.css";

export const Note = ({ note }) => {
  // TODO: implement small text for note content if content is longer than 70 chars
  // TODO: implement variable note size, 45 chars truncation is placeholder for now
  const content = note.content.length > 400 ? note.content.substr(0, 400) + "..." : note.content;
  const title = note.title.length > 400 ? note.title.substr(0, 400) + "..." : note.title;
  const contentSize = note.content.length > 70 ? "note__content--small" : "";

  return (
    <div className={`note ${note.color}`}>
        <div className="note__title">{title}</div>
        <div className={`note__content ${contentSize}`}>{content}</div>
      </div>
  );
};
