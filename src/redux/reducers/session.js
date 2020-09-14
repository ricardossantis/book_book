import { LOGIN, LOGOUT } from "../actions/actionsType.js";

const defaultState = {
  status: "",
  token: localStorage.getItem("token") || "",
  user: JSON.parse(localStorage.getItem("currentUser")) || {},
};

const session = (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      console.log(type, payload)
      const { status, user, token } = payload;
      return { ...state, status, user, token };

    case LOGOUT:
      localStorage.clear();
      payload.status.push("/logar");
      return { ...state, status: 205, user: {}, token: "" };

    default:
      return state;
  }
};

export default session;
