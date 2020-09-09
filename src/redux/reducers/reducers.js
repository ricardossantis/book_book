import { combineReducers } from "redux";
import setUserLogin from "./login";
import getBooksReview from "./timeline";

export default combineReducers({ setUserLogin, getBooksReview });
