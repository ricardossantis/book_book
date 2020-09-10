import { LOGIN, LOGOUT } from "../actions/actions-type";

const defaultState = {
  token: localStorage.getItem("token") || "",
  user: JSON.parse(localStorage.getItem("currentUser")) || {},
};

const session = (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      const { status, token, user } = payload;
      return {
        ...state,
        status,
        token,
        user,
      };

    case LOGOUT:
      localStorage.clear();
      payload.status.push("/login");
      return {
        ...state,
        status: 205,
        token: "",
        user: {},
      };

    default:
      return state;
  }
};

export default session;
