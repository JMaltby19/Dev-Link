import React from "react";
import { Link } from "react-router-dom";

export const DashboardLinks = () => {
	return (
		<div className="w-full relative flex justify-center mt-32">
			<Link
				to="/edit-profile"
				className="flex justify-center items rounded-sm my-2 py-2 mx-2 bg-slate-500 text-white border-2 w-32 h-12"
			>
				Edit Profile
			</Link>
			<Link
				to="/add-experience"
				className="flex justify-center items rounded-sm my-2 py-2 mx-2 bg-slate-500 text-white border-2 w-32 h-12"
			>
				Add Experience
			</Link>
			<Link
				to="/add-education"
				className="flex justify-center items rounded-sm my-2 py-2 mx-2 bg-slate-500 text-white border-2 w-32 h-12"
			>
				Add Education
			</Link>
		</div>
	);
};
