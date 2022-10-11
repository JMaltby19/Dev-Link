import { authReducer } from "./auth";
import { combineReducers } from "redux";
import { alertsReducer } from "./alert";

export default combineReducers({ alertsReducer, authReducer });
