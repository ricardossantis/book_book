import { SET_FEEDBACK_AUTHORIZATION } from "../actions/actions-type";

const initialState = {
  feedback: {
    authorization: false,
  },
  login: {
    authorization: false,
  },
};

const authorization = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEEDBACK_AUTHORIZATION:
      return {
        ...state,
        feedback: {
          authorization: action.authorization || !state.feedback.authorization,
        },
      };
    default:
      return state;
  }
};

export default authorization;
