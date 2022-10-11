import React from "react";
import { useAppSelector } from "../../hooks/hooks";

export const Alert = () => {
	// const alerts = useSelector<RootState, RootState["alerts"]>(
	// 	(state) => state.alerts
	// );

	const alerts = useAppSelector((state) => state.alerts);

	return (
		<div className=" max-w-screen-lg flex justify-center align-middle">
			{alerts !== null &&
				alerts.length > 0 &&
				alerts.map((alert) => (
					<div
						className={` w-full h-12 text-2xl text-slate-100 bg-cyan-700 absolute flex justify-center items-center mt-24 ${alert.alertType}`}
						key={alert.id}
					>
						{alert.msg}
					</div>
				))}
		</div>
	);
};
