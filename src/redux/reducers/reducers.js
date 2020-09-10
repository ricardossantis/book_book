import { combineReducers } from "redux";
import session from "./session";
import timeline from "./timeline";

export default combineReducers({ session, timeline });
