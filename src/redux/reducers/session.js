import { LOGIN, LOGOUT, ADD_FRIEND } from "../actions/actionsType.js";

const defaultState = {
  status: "",
  token: localStorage.getItem("token") || "",
  user: JSON.parse(localStorage.getItem("currentUser")) || {},
  friends: {},
};

const session = (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      const { status, user, token } = payload;
      const friends =
        JSON.parse(localStorage.getItem(`friends ${user && user.id}`)) || [];
      return {
        ...state,
        status,
        user,
        token,
        friends,
      };

    case LOGOUT:
      localStorage.clear();
      payload.status.push("/logar");
      return { ...state, status: 205, user: {}, token: "" };

    case ADD_FRIEND:
      localStorage.setItem(
        `friends ${state.user.id}`,
        JSON.stringify({ ...state.friends, ...payload })
      );
      return { ...state, friends: { ...state.friends, ...payload } };

    default:
      return state;
  }
};

export default session;
