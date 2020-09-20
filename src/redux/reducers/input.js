import { SET_INPUT_VALUE } from "../actions/actionsType.js";

const defaultState = { inputValue: "" };

const inputValue = (state = defaultState, { type, value }) => {
    switch (type) {
        case SET_INPUT_VALUE:
            return { ...state, inputValue: value };

        default:
            return state;
    }
};

export default inputValue;
