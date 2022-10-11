import { alertError } from "./../utils/redux-alert-error";
import {
	ActionTypes,
	RegisterFailType,
	RegisterSuccessType,
	UserLoadedType,
	AuthErrorType,
	LoginSuccessType,
	LoginFailType,
	LogoutType,
	ClearProfileType,
} from "./action.types";
import { Dispatch } from "redux";
import {
	AuthType,
	RegisterType,
	UserType,
	LoginType,
	ErrorType,
} from "./../global.types";
import axios from "axios";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_PROFILE,
} from "./types";
import { setAuthToken } from "../utils/setAuthToken";
import { store } from "./../store";
import { setAlert } from "./alert";

// Load user
export const loadUser = () => async (dispatch: Dispatch<ActionTypes>) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	// const token = localStorage.getItem("token");
	// if (!token) return dispatch({ type: USER_NOT_LOADED });

	try {
		const res = await axios.get<UserType>("http://localhost:6001/api/auth", {
			headers: {
				"Content-Type": "application/json",
			},
		});

		console.log(res.data);
		dispatch({
			type: USER_LOADED,
			payload: res.data,
		} as UserLoadedType);
	} catch (error) {
		dispatch({
			type: AUTH_ERROR,
		} as AuthErrorType);
	}
};

// Register user
export const register =
	({ name, email, password }: RegisterType) =>
	async (dispatch: Dispatch<ActionTypes>) => {
		const body = JSON.stringify({ name, email, password });

		try {
			// const res = await axios.post("api/users", body, config);
			const res = await axios.post<AuthType>(
				"http://localhost:6001/api/users",
				body,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			} as RegisterSuccessType);

			store.dispatch(loadUser());
		} catch (err) {
			alertError(err);

			dispatch({
				type: REGISTER_FAIL,
			} as RegisterFailType);
		}
	};

// Login user
export const login =
	({ email, password }: LoginType) =>
	async (dispatch: Dispatch<ActionTypes>) => {
		const body = JSON.stringify({ email, password });

		try {
			// const res = await axios.post("api/users", body, config);
			const res = await axios.post<AuthType>(
				"http://localhost:6001/api/auth/login",
				body,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			console.log(res);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			} as LoginSuccessType);

			store.dispatch(loadUser());
			console.log(loadUser);
		} catch (error: any) {
			// alertError(err);
			// const errors = error.res.data.errors;

			// if (errors) {
			// 	errors.forEach((error: ErrorType) =>
			// 		store.dispatch(setAlert(error.msg, "danger"))
			// 	);
			// }
			dispatch({
				type: LOGIN_FAIL,
			} as LoginFailType);
		}
	};

// Logout
export const Logout = () => (dispatch: Dispatch<ActionTypes>) => {
	localStorage.removeItem("token");
	dispatch({ type: CLEAR_PROFILE } as ClearProfileType);
	dispatch({ type: LOGOUT } as LogoutType);
};
