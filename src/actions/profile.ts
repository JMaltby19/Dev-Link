import { alertError } from "./../utils/redux-alert-error";
import {
	EducationType,
	ErrorType,
	ExperienceType,
	GithubRepoType,
	ProfileType,
} from "./../global.types";
import {
	ACCOUNT_DELETED,
	CLEAR_PROFILE,
	GET_ALL_PROFILES,
	GET_PROFILE,
	GET_REPOS,
	PROFILE_ERROR,
	UPDATE_PROFILE,
} from "./types";
import axios from "axios";
import {
	ActionTypes,
	GetProfileType,
	ProfileErrorType,
	UpdateProfileType,
	GetAllProfilesType,
	GetGithubReposType,
} from "./action.types";
import { Dispatch } from "redux";
import { setAlert } from "./alert";
import { store } from "../store";

export const getCurrentProfile =
	() => async (dispatch: Dispatch<ActionTypes>) => {
		try {
			const res = await axios.get("http://dev-link-api/api/profile/me");

			dispatch({
				type: GET_PROFILE,
				payload: res.data,
			} as GetProfileType);
		} catch (error: any) {
			// if (error instanceof Error) {
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error.response.statusText,
					statusText: error.response.status,
				},
			} as ProfileErrorType);
		}
		// }
	};

export const getAllProfiles = () => async (dispatch: Dispatch<ActionTypes>) => {
	dispatch({ type: CLEAR_PROFILE });
	try {
		const res = await axios.get("http://dev-link-api/api/profile");

		dispatch({
			type: GET_ALL_PROFILES,
			payload: res.data,
		} as GetAllProfilesType);
	} catch (error: any) {
		// if (error instanceof Error) {
		dispatch({
			type: PROFILE_ERROR,
			payload: {
				msg: error.response.statusText,
				statusText: error.response.status,
			},
		} as ProfileErrorType);
	}
	// }
};

export const getProfileById =
	(user_id: string) => async (dispatch: Dispatch<ActionTypes>) => {
		dispatch({ type: CLEAR_PROFILE });
		try {
			const res = await axios.get(
				`http://dev-link-api/api/profile/user/${user_id}`
			);

			dispatch({
				type: GET_PROFILE,
				payload: res.data,
			} as GetProfileType);
		} catch (error: any) {
			// if (error instanceof Error) {
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error.response.statusText,
					statusText: error.response.status,
				},
			} as ProfileErrorType);
		}
		// }
	};

export const getGithubRepos =
	(username: string) => async (dispatch: Dispatch<ActionTypes>) => {
		try {
			const res = await axios.get<GithubRepoType[]>(
				`http://dev-link-api/api/profile/github/${username}`
			);

			dispatch({
				type: GET_REPOS,
				payload: res.data,
			} as GetGithubReposType);
		} catch (error: any) {
			// if (error instanceof Error) {
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error.response.statusText,
					statusText: error.response.status,
				},
			} as ProfileErrorType);
		}
		// }
	};

export const createProfile =
	(data: ProfileType, edit = false) =>
	async (dispatch: Dispatch<ActionTypes>) => {
		try {
			const res = await axios.post<ProfileType>(
				"http://dev-link-api/api/profile",
				data,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			dispatch({
				type: GET_PROFILE,
				payload: res.data,
			} as GetProfileType);

			store.dispatch(
				setAlert(edit ? "Profile Updated" : "Profile Created", "success")
			);
		} catch (error: any) {
			alertError(error);
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error.response.statusText,
					statusText: error.response.status,
				},
			} as ProfileErrorType);
		}
	};

export const addExperience =
	(data: ExperienceType) => async (dispatch: Dispatch<ActionTypes>) => {
		try {
			const res = await axios.put<ProfileType>(
				"http://dev-link-api/api/profile/experience",
				data,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			dispatch({
				type: UPDATE_PROFILE,
				payload: res.data,
			} as UpdateProfileType);

			store.dispatch(setAlert("Experience added", "success"));
		} catch (error: any) {
			// alertError(error);
			const errors = error.res.data.errors;

			if (errors) {
				errors.forEach((error: ErrorType) =>
					store.dispatch(setAlert(error.msg, "danger"))
				);
			}

			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error.response.statusText,
					statusText: error.response.status,
				},
			} as ProfileErrorType);
		}
	};

export const addEducation =
	(data: EducationType) => async (dispatch: Dispatch<ActionTypes>) => {
		try {
			const res = await axios.put<ProfileType>(
				"http://dev-link-api/api/profile/education",
				data,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			dispatch({
				type: UPDATE_PROFILE,
				payload: res.data,
			} as UpdateProfileType);

			store.dispatch(setAlert("Education added", "success"));
		} catch (error: any) {
			// alertError(error);
			const errors = error.res.data.errors;

			if (errors) {
				errors.forEach((error: ErrorType) =>
					store.dispatch(setAlert(error.msg, "danger"))
				);
			}

			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error.response.statusText,
					statusText: error.response.status,
				},
			} as ProfileErrorType);
		}
	};

export const deleteExperience =
	(_id: string | undefined) => async (dispatch: Dispatch<ActionTypes>) => {
		// const id: string = _id!;

		try {
			const res = await axios.delete<ProfileType>(
				`http://dev-link-api/api/profile/experience/${_id}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			dispatch({
				type: UPDATE_PROFILE,
				payload: res.data,
			} as UpdateProfileType);
			store.dispatch(setAlert("Experience removed", "success"));
		} catch (error: any) {
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error.response.statusText,
					statusText: error.response.status,
				},
			});
		}
	};

export const deleteEducation =
	(_id: string | undefined) => async (dispatch: Dispatch<ActionTypes>) => {
		try {
			const res = await axios.delete<ProfileType>(
				`http://dev-link-api/api/profile/education/${_id}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			dispatch({
				type: UPDATE_PROFILE,
				payload: res.data,
			} as UpdateProfileType);
			store.dispatch(setAlert("Education removed", "success"));
		} catch (error: any) {
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error.response.statusText,
					statusText: error.response.status,
				},
			});
		}
	};

export const deleteAccount = () => async (dispatch: Dispatch<ActionTypes>) => {
	if (window.confirm("Are you sure ? This action cannot be undone")) {
		try {
			await axios.delete<ProfileType>("http://dev-link-api/api/profile");
			dispatch({ type: CLEAR_PROFILE });
			dispatch({ type: ACCOUNT_DELETED });
			store.dispatch(setAlert("Your account has been deleted", "success"));
		} catch (error: any) {
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error.response.statusText,
					statusText: error.response.status,
				},
			});
		}
	}
};
