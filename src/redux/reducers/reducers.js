import { combineReducers } from "redux";
import session from "./session.reducers";
import timeline from "./timeline.reducers";

export default combineReducers({ session, timeline });
