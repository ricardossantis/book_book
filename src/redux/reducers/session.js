import { LOGIN, LOGOUT, UPDATE_FRIENDS } from "../actions/actionsType.js";

const defaultState = {
  status: "",
  token: localStorage.getItem("token") || "",
  user: JSON.parse(localStorage.getItem("currentUser")) || {},
};

const session = (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      const { status, user, token } = payload;
      return {
        ...state,
        status,
        user,
        token,
      };

    case LOGOUT:
      localStorage.clear();
      payload.status.push("/logar");
      return { ...state, status: 205, user: {}, token: "" };

    case UPDATE_FRIENDS:
      localStorage.setItem(
        "CurrentUser",
        JSON.stringify({
          ...state.user,
          config: { ...state.user.config, ...payload },
        })
      );
      return {
        ...state,
        user: { ...state.user, config: { ...state.user.config, ...payload } },
      };

    default:
      return state;
  }
};

export default session;
