import api from "../../services/api";
import { UPDATE_FRIENDS } from "./actionsType.js";

const createHeader = (token = localStorage.getItem("token")) => ({
  headers: { authorization: token },
});

export const updateFriends = (user, friend) => (dispatch) => {
  const change = { [friend.id]: { id: friend.id, user: friend.user } };
  const config = {
    config: JSON.stringify({ ...change, ...user.config }),
  };
  api
    .put(`users/${user.id}`, config, createHeader())
    .then((res) => {
      console.warn("Add Friend Status:", res);
      dispatch(updateFriend(JSON.parse(res.data.config)));
    })
    .catch((err) => console.error("Add Friend Failed", err));
};

export const removeFriends = (user, friend) => (dispatch) => {
  delete user.config[friend.id];
  const config = {
    config: JSON.stringify({ ...user.config }),
  };
  console.log(config);
  api
    .put(`users/${user.id}`, config, createHeader())
    .then((res) => {
      console.warn("Add Friend Status:", res);
      dispatch(updateFriend(JSON.parse(res.data.config)));
    })
    .catch((err) => console.error("Add Friend Failed", err));
};

const updateFriend = (friend) => ({
  type: UPDATE_FRIENDS,
  payload: friend,
});
