import axios from "axios";

const BASE_URL = "http://localhost:3001";

const getAll = () => {
  const request = axios.get(`${BASE_URL}/notes`);

  return request.then((response) => response.data);
};

export default { getAll };
