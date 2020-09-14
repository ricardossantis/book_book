import { combineReducers } from "redux";
import session from "./session.js";
import books from "./books.js";
export default combineReducers({ session, books });
