import { LOGIN } from "../actions/actions-type";

const defaultState = {};

const setUserLogin = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action.user);
      return {
        user: action.user.data.user.id,
        token: action.user.data.auth_token,
      };

    default:
      return state;
  }
};

export default setUserLogin;
