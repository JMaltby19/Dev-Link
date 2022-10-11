import { GET_ALL_PROFILES, GET_REPOS } from "./../actions/types";
import { ActionTypes } from "./../actions/action.types";
import { AuthErrorType } from "../actions/action.types";
import {
	ErrorType,
	GithubRepoType,
	ProfileErrType,
	ProfileType,
} from "../global.types";
import {
	CLEAR_PROFILE,
	GET_PROFILE,
	PROFILE_ERROR,
	UPDATE_PROFILE,
} from "../actions/types";

const initialState: ProfileState = {
	profile: null,
	profiles: [],
	repos: [],
	loading: true,
	error: {},
};

export interface ProfileState {
	profile: ProfileType | null;
	profiles: ProfileType[];
	repos: GithubRepoType[];
	loading: boolean;
	error: ProfileErrType | {};
}

export const profileReducer = (
	state: ProfileState = initialState,
	action: ActionTypes
) => {
	switch (action.type) {
		case GET_PROFILE:
		case UPDATE_PROFILE:
			return {
				...state,
				profile: action.payload,
				loading: false,
			};
		case GET_ALL_PROFILES:
			return {
				...state,
				profiles: action.payload,
				loading: false,
			};
		case PROFILE_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case CLEAR_PROFILE:
			return {
				...state,
				profile: null,
				repos: [],
				loading: false,
			};
		case GET_REPOS:
			return {
				...state,
				repos: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};
