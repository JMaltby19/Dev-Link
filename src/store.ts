import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { createBrowserHistory } from "@remix-run/router";
import { ActionTypes } from "./actions/action.types";
import { combineReducers } from "redux";
import { authReducer } from "./reducers/auth";
import { alertsReducer } from "./reducers/alert";
import { profileReducer } from "./reducers/profile";

const initialState = {};

export const history = createBrowserHistory();

const middleware = [thunk as ThunkMiddleware<RootState, ActionTypes>];

const enhanceCompose = composeWithDevTools({ shouldCatchErrors: true });

const rootReducer = combineReducers({
	alerts: alertsReducer,
	auth: authReducer,
	profile: profileReducer,
});

export const store: Store<RootState, any> = createStore(
	rootReducer,
	initialState,
	enhanceCompose(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
