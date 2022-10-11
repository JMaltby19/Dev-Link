import { v4 as uuid } from "uuid";
import { ErrorType } from "../global.types";
import { store } from "../store";
import { SetAlertType } from "../actions/action.types";

export const alertError = (error: any) => {
	const errorResponse: { errors: ErrorType[] } = error?.response?.data;

	errorResponse?.errors?.forEach((err: ErrorType) => {
		store.dispatch({
			type: "SET_ALERT",
			payload: {
				id: uuid(),
				alertType: "danger",
				msg: err.msg,
			},
		} as SetAlertType);
	});
};
