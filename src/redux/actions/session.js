import api from "../api";
import { LOGIN } from "./actions-type";

export const postLogin = ({ username, password }) => (dispatch) => {
  api
    .post("/authenticate", { user: username, password })
    .then((res) => {
      dispatch(session(res.data.auth_token, res.data.user, false));

      localStorage.setItem("token", res.data.auth_token);
      localStorage.setItem("CurrentUser", JSON.stringify(res.data.user));
    })
    .catch(({ response }) => {
      if (response.status === 401) {
        dispatch(session("", {}, "Credenciais Inválidas!"));
      }
    });
};

const session = (token, user, error) => ({
  type: LOGIN,
  payload: { token, user, error },
});
