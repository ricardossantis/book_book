import { combineReducers } from "redux";
import session from "./session";
import getBooksReview from "./timeline";

export default combineReducers({ session, getBooksReview });
