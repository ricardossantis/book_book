import api from "../../services/api";
import { getUserAndToken } from "../../utils/getUsers.js";
import { LOGIN, LOGOUT, ADD_FRIEND, CLEAR_BOOKS } from "./actionsType.js";

const setTokenAndUserToLocalStorage = ({ auth_token, user }) => {
  localStorage.setItem("token", auth_token);
  localStorage.setItem("CurrentUser", JSON.stringify(user));
};

export const loginWithAPI = (info) => (dispatch) => {
  api
    .post("/authenticate", info)
    .then((response) => {
      setTokenAndUserToLocalStorage(response.data);
      dispatch(
        setLogged({
          status: 200,
          token: response.data.auth_token,
          user: response.data.user,
        })
      );
    })
    .catch(({ response }) => {
      if (response.status === 401) {
        dispatch(
          setLogged({
            status: 401,
            token: false,
            user: false,
          })
        );
      }
    });
};

const setLogged = (info) => ({
  type: LOGIN,
  payload: info,
});

export const updateSession = () => (dispatch) => {
  const { user, token } = getUserAndToken();
  dispatch(setLogged({ status: 200, token, user }));
};

export const clearAllState = (page) => (dispatch) => {
  dispatch(clearBooksState());
  dispatch(logout(page));
};

const clearBooksState = () => ({
  type: CLEAR_BOOKS,
});

const logout = (page) => ({
  type: LOGOUT,
  payload: { status: page },
});

export const addFriend = ({ id, user }) => ({
  type: ADD_FRIEND,
  payload: { [id]: { id, user } },
});
