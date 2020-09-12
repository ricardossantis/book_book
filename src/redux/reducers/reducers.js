import { combineReducers } from "redux";
import session from "./session";
import timeline from "./timeline";
import books from "./books.js";
export default combineReducers({ session, timeline, books });
