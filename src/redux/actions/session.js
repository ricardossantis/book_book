import api from "../../services/api";
import { LOGIN, LOGOUT } from "./actionsType";

export const postLogin = ({ username, password }) => (dispatch) => {
  api
    .post("/authenticate", { user: username, password })
    .then((res) => {
      dispatch(session(200, res.data.auth_token, res.data.user));
      localStorage.setItem("token", res.data.auth_token);
      localStorage.setItem("CurrentUser", JSON.stringify(res.data.user));
    })
    .catch(({ response }) => {
      if (response.status === 401) {
        dispatch(session(response.status));
      }
    });
};

export const updateSession = () => (dispatch) => {
  let token = localStorage.getItem("token")
  let user = JSON.parse(localStorage.getItem("CurrentUser"))
  dispatch(session(200, token, user));
};

const session = (status, token, user) => ({
  type: LOGIN,
  payload: { status, token, user },
});

const logout = (page, token, user) => ({
  type: LOGOUT,
  payload: { status: page, token, user },
});

export const setLogout = (page) => (dispatch) => {
  dispatch(logout(page));
};
