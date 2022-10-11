import { AlertType } from "./../global.types";
import { SET_ALERT, REMOVE_ALERT } from "./../actions/types";
import { ActionTypes } from "../actions/action.types";

const initialState: AlertType[] = [];

export const alertsReducer = (
	state: AlertType[] = initialState,
	action: ActionTypes
) => {
	const { type } = action;

	switch (type) {
		case SET_ALERT:
			return [...state, action.payload];
		case REMOVE_ALERT:
			return state.filter((alert: AlertType) => alert.id !== action.payload.id);
		default:
			return state;
	}
};

// export const alertState = (state: RootState) => state;
