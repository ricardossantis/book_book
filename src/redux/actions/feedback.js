import { SET_FEEDBACK_AUTHORIZATION } from "./actions-type";
import api from "../../services/api.js";

export const postFeedback = (feedback, user, book) => (dispatch) => {
  const headers = { headers: { authorization: user.token } };

  api
    .put(`/users/${user.user.id}/books/${book.id}`, feedback, headers)
    .then((response) => dispatch(setFeedbackAuthorization(false)))
    .catch(({ response: status }) => console.log(status));
};

export const setFeedbackAuthorization = (authorization) => ({
  type: SET_FEEDBACK_AUTHORIZATION,
  authorization,
});
