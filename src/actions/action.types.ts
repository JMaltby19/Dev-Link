import {
	GithubRepoType,
	ProfileErrType,
	ProfileType,
	UserType,
} from "./../global.types";
import { AlertType } from "../global.types";

export interface SetAlertType {
	type: "SET_ALERT";
	payload: AlertType;
}

export interface RemoveAlertType {
	type: "REMOVE_ALERT";
	payload: {
		id: string;
	};
}

export interface RegisterSuccessType {
	type: "REGISTER_SUCCESS";
	payload: { token: string };
}

export interface RegisterFailType {
	type: "REGISTER_FAIL";
}

export interface UserLoadedType {
	type: "USER_LOADED";
	payload: UserType;
}

export interface UserNotLoadedType {
	type: "USER_NOT_LOADED";
}

export interface AuthErrorType {
	type: "AUTH_ERROR";
}

export interface LoginSuccessType {
	type: "LOGIN_SUCCESS";
	payload: {
		token: string;
	};
}

export interface LoginFailType {
	type: "LOGIN_FAIL";
}

export interface LogoutType {
	type: "LOGOUT";
}

export interface GetProfileType {
	type: "GET_PROFILE";
	payload: ProfileType;
}

export interface GetAllProfilesType {
	type: "GET_ALL_PROFILES";
	payload: ProfileType[];
}

export interface GetGithubReposType {
	type: "GET_REPOS";
	payload: GithubRepoType[];
}

export interface ProfileErrorType {
	type: "PROFILE_ERROR";
	payload: ProfileErrType;
}

export interface ClearProfileType {
	type: "CLEAR_PROFILE";
}

export interface UpdateProfileType {
	type: "UPDATE_PROFILE";
	payload: ProfileType;
}

export interface deleteAccountType {
	type: "DELETE_ACCOUNT";
}

export interface AccountDeletedType {
	type: "ACCOUNT_DELETED";
}

export type ActionTypes =
	| SetAlertType
	| RemoveAlertType
	| RegisterSuccessType
	| RegisterFailType
	| UserLoadedType
	| UserNotLoadedType
	| AuthErrorType
	| LoginSuccessType
	| LoginFailType
	| LogoutType
	| GetProfileType
	| GetAllProfilesType
	| GetGithubReposType
	| ProfileErrorType
	| ClearProfileType
	| UpdateProfileType
	| deleteAccountType
	| AccountDeletedType;
