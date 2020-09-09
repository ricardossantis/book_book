import axios from "axios";

const api = axios.create({
  baseURL: "https://ka-users-api.herokuapp.com",
  headers: {
    authorization: "",
  },
});

export default api;
