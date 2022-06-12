import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const NotePage = () => {
  const history = useNavigate();

  let params = useParams();
  let noteId = params.id;

  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  let createNote = async () => {
    await fetch(`http://localhost:8000/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  let getNote = async () => {
    if (noteId === "new") {
      return;
    }
    let response = await fetch(`http://localhost:8000/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  let updateNote = async () => {
    await fetch(`http://localhost:8000/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  let deleteNote = async () => {
    await fetch(`http://localhost:8000/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    history("/");
  };

  let handleSubmit = async () => {
    if (noteId !== "new" && !note.body) {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    } else if (noteId === "new" && note !== null) {
      createNote();
    }
    history("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link
            to="/"
            onClick={() => {
              handleSubmit();
            }}
          >
            &#8617; back
          </Link>
        </h3>
        {noteId !== "new" ? (
          <button
            onClick={() => {
              deleteNote();
            }}
          >
            delete
          </button>
        ) : (
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            done
          </button>
        )}
      </div>

      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
