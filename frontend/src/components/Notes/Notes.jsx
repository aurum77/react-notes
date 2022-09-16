import "./Notes.css";

export const Notes = ({ children }) => {
  const notes = children.filter((child) => child.props.note.pinned !== true);
  const pinned = children.filter((child) => child.props.note.pinned === true);

  return (
    <div >
      <div className="notes__header">PINNED</div>
    <div className="notes__container">
      {pinned.length !== 0 ? pinned : ""}
    </div>
      <div className="notes__header">NOTES</div>
    <div className="notes__container">
      {notes.length !== 0 ? notes : ""}
    </div>
    </div>
  );
};
