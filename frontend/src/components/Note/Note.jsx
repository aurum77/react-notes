import "./Note.css";
import { NoteToolbar } from "../NoteToolbar";
import { NoteModal } from "../NoteModal";
import { useState } from "react";

export const Note = ({ note }) => {
  const [toolbarVisibility, setToolbarVisibility] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);

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

  const handleModalVisibility = () => {
    if (!modalVisibility) {
      setModalVisibility(!modalVisibility);
    }
  };

  return (
    <div
      className={`note ${note.color} ${
        modalVisibility ? "note--invisible" : ""
      }`}
      onMouseEnter={handleToolbarVisibility}
      onMouseLeave={handleToolbarVisibility}
      onClick={handleModalVisibility}
    >
      <div className="note__title">{title}</div>
      <div className={`note__content ${contentSize}`}>{content}</div>
      {!modalVisibility && (
        <NoteToolbar id={note.id} visibility={toolbarVisibility} />
      )}
      <NoteModal
        id={note.id}
        visibility={modalVisibility}
        setVisibility={setModalVisibility}
      />
    </div>
  );
};
