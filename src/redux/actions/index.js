import api from "../api";
import { LOGIN } from "./actions-type";

export const postLogin = ({ username, password }) => (dispatch) => {
  api
    .post("/authenticate", { user: username, password: password })
    .then((response) => response)
    .then((res) => {
      dispatch(setUserLogin(res));
    })
    .catch(({ response }) => {
      console.log(response.data.error);
      return response.data.error;
    });
};

const setUserLogin = (user) => ({
  type: LOGIN,
  user,
});
