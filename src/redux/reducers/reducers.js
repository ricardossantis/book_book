import { combineReducers } from "redux";
import session from "./session.js";
import books from "./books.js";
import inputValue from "./input"
export default combineReducers({ session, books, inputValue });
