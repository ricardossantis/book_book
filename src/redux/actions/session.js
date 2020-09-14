import api from "../../services/api";
import { getUserAndToken } from "../../utils/getUsers.js";
import { LOGIN, LOGOUT } from "./actionsType.js";

const setTokenAndUserToLocalStorage = ({ auth_token, user }) => {
  localStorage.setItem("token", auth_token);
  localStorage.setItem("CurrentUser", JSON.stringify(user));
};

export const loginWithAPI = (info) => (dispatch) => {
  api
    .post("/authenticate", info)
    .then((response) => {
      console.warn(`loginWithAPI Status:${response.status}`);
      setTokenAndUserToLocalStorage(response.data);
      dispatch(setLogged(200, response.data.auth_token, response.data.user));
    })
    .catch(
      ({ response }) =>
        response.status === 401 && dispatch(setLogged(response.status))
    );
};

export const updateSession = () => (dispatch) => {
  const { user, token } = getUserAndToken();
  dispatch(setLogged({ status: 200, token, user }));
};

export const logout = (page) => ({
  type: LOGOUT,
  payload: { status: page },
});

const setLogged = (info) => ({
  type: LOGIN,
  payload: info,
});
