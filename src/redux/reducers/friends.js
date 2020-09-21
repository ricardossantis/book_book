import { UPDATE_FRIENDS } from "../actions/actionsType.js";

const defaultState = {
  friends: localStorage.getItem("friends"),
};

const friends = (state = defaultState, { type, friend }) => {
  switch (type) {
    case UPDATE_FRIENDS:
      localStorage.setItem(
        "friends",
        JSON.stringify({ ...state.friends, ...friend })
      );
      return { ...state, friends: { ...state.friends, ...friend } };

    default:
      return state;
  }
};

export default friends;
