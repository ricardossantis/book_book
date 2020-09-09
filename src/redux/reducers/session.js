import { LOGIN } from "../actions/actions-type";

const defaultState = {
  token: localStorage.getItem("token") || "",
  user: JSON.parse(localStorage.getItem("currentUser")) || {},
};

const session = (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      const { token, user, error } = payload;
      return {
        ...state,
        token,
        user,
        error,
      };

    default:
      return state;
  }
};

export default session;
