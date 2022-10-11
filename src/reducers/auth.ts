import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	ACCOUNT_DELETED,
} from "./../actions/types";
import { ActionTypes } from "./../actions/action.types";
import { AuthType } from "./../global.types";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	USER_NOT_LOADED,
	AUTH_ERROR,
} from "../actions/types";

const initialState: AuthType = {
	token: localStorage.getItem("token"),
	isAuthenticated: false,
	loading: true,
	user: null,
};

export const authReducer = (
	state: AuthType = initialState,
	action: ActionTypes
): AuthType => {
	const { type } = action;

	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload,
			};
		case USER_NOT_LOADED:
			return {
				...state,
				isAuthenticated: false,
				loading: false,
				user: null,
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			const token = action.payload.token;
			localStorage.setItem("token", token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false,
			};
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT:
		case ACCOUNT_DELETED:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
			};
		default:
			return state;
	}
};
