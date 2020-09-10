import api from "../../services/api";
import { LOGIN, LOGOUT } from "./actions-type";

const session = (status, token, user) => ({
  type: LOGIN,
  payload: { status, token, user },
});

export const postLogin = ({ username, password }) => (dispatch) => {
  api
    .post("/authenticate", { user: username, password })
    .then((res) => {
      dispatch(session(200, res.data.auth_token, res.data.user));

      localStorage.setItem("token", res.data.auth_token);
      localStorage.setItem("CurrentUser", JSON.stringify(res.data.user));
    })
    .catch(({ response }) => {
      dispatch(session(response.status));
    });
};

const logout = (page, token, user) => ({
  type: LOGOUT,
  payload: { status: page, token, user },
});

export const setLogout = (page) => (dispatch) => {
  dispatch(logout(page));
};
