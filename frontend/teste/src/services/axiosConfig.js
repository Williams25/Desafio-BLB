import axios from "axios";

const IP = `localhost`;

export const http = axios.create({
  baseURL: `http://${IP}:5000/`,
});
