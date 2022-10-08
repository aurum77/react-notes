import axios from "axios";

const getAll = () => {
  const request = axios.get("/api/notes");
  return request.then((response) => response.data);
};

const createNote = (note) => {
  const request = axios.post("/api/notes", note);
  return request.then((response) => response.data);
};

const deleteNote = (noteId) => {
  const request = axios.delete(`/api/notes/${noteId}`);
  return request.then((response) => response.data);
};

const patchNote = (note) => {
  const request = axios.patch(`/api/notes/${note.id}`, note);
  return request.then((response) => response.data);
};

export default { getAll, createNote, deleteNote, patchNote };
