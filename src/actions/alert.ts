import { RootState } from "./../store";
import { Dispatch } from "redux";
import { v4 as uuid } from "uuid";
import { ActionTypes, SetAlertType } from "./action.types";
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (msg: string, alertType: string, timeout = 5000) => {
	return (dispatch: Dispatch<ActionTypes>, getState: () => RootState) => {
		const id = uuid();
		dispatch({
			type: SET_ALERT,
			payload: { msg, alertType, id: id },
		} as SetAlertType);

		setTimeout(
			() => dispatch({ type: REMOVE_ALERT, payload: { id } }),
			timeout
		);
	};
};
