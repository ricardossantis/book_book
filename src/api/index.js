import axios from "axios";

const baseURL = `https://ka-users-api.herokuapp.com`;

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1ODMsImV4cCI6MTYzMDEwMDI1MX0.tTenPsrcxyBQVcEw4pfL0K_EtwBKkQBGgeDsw-JhJZ0",
  },
});

export default instance;
