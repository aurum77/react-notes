import axios from "axios";

const BASE_URL = "http://localhost:3001";

const getAll = () => {
  const request = axios.get(`${BASE_URL}/api/notes`);
  return request.then((response) => response.data);
};

const createNote = (note) => {
  const request = axios.post(`${BASE_URL}/api/notes`, note);
  return request.then((response) => response.data);
};

const deleteNote = (noteId) => {
  const request = axios.delete(`${BASE_URL}/api/notes/${noteId}`);
  return request.then((response) => response.data);
};

export default { getAll, createNote, deleteNote };
