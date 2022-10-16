import axios from "axios";

const getAll = async () => {
  const request = axios.get("/api/notes");
  const response = await request;
    return response.data;
};

const createNote = async (note) => {
  const request = axios.post("/api/notes", note);
  const response = await request;
    return response.data;
};

const deleteNote = async (noteId) => {
  const request = axios.delete(`/api/notes/${noteId}`);
  const response = await request;
    return response.data;
};

const patchNote = async (note) => {
  const request = axios.patch(`/api/notes/${note.id}`, note);
  const response = await request;
    return response.data;
};

export default { getAll, createNote, deleteNote, patchNote };
