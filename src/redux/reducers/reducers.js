import { combineReducers } from "redux";
import session from "./session";
import timeline from "./timeline";
import books from "./books.js";
import authorization from "./authorization";
export default combineReducers({ session, timeline, books, authorization });
