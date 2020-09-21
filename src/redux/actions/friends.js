import api from "../../services/api";
import { UPDATE_FRIENDS } from "./actionsType.js";

const createHeader = (token = localStorage.getItem("token")) => ({
  headers: { authorization: token },
});

export const updateFriends = (user, friends) => (dispatch) => {
  console.log(user, friends);
  api
    .put(`/users/${user.id}`, { config: friends }, createHeader())
    .then((response) => {
      console.warn(`AddFriend Status:${response.status}`);
      dispatch(updateFriend(friends));
    })
    .catch((error) => console.error(error));
};

const updateFriend = (friend) => ({
  type: UPDATE_FRIENDS,
  payload: friend,
});
