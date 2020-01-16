import axios from "axios";

const api = axios.create({
  baseURL: "htpp://192.168.25.52:3333"
});

export default api;
