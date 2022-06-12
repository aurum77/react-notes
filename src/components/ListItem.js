import React from "react";
import { Link } from "react-router-dom";
// import notes from "../assets/data";

let getTitle = (note) => {
  const title = note.body.split("\n")[0];

  if (title.length > 45) {
    return title.slice(0, 40) + "...";
  }
  return title;
};

let getDate = (note) => {
  const timeOptions = { hour: "2-digit", minute: "2-digit" };
  return (
    new Date(note.updated).toLocaleDateString("tr-TR") +
    ", " +
    new Date(note.updated).toLocaleTimeString("tr-TR", timeOptions)
  );
};

let getContent = (note) => {
  let title = getTitle(note);
  let content = note.body.replaceAll("\n", " ");
  content = content.replaceAll(title, "");

  if (content.length > 30) {
    return content.slice(0, 30) + "...";
  } else {
    return content;
  }
};

const ListItem = ({ note }) => {
  return (
    <div>
      <Link to={`/note/${note.id}`}>
        <div className="notes-list-item">
          <h3>{getTitle(note)}</h3>
          <p>
            <span>{getDate(note)}</span>
            {getContent(note)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
