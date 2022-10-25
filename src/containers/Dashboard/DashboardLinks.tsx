import React from "react";
import { Link } from "react-router-dom";

export const DashboardLinks = () => {
	return (
		<div className="w-full relative flex shrink justify-center mt-10">
			<Link
				to="/edit-profile"
				className="flex justify-center flex-initial rounded-3xl my-2 py-3 mx-3 bg-[#54a7ff] hover:scale-105 text-[#101e50] text-xs md:text-base w-24 md:w-36 h-10 md:h-12"
			>
				Edit Profile
			</Link>
			<Link
				to="/add-experience"
				className="flex justify-center flex-initial rounded-3xl my-2 py-3 mx-3 bg-[#54a7ff] hover:scale-105 text-[#101e50] text-xs md:text-base w-24 md:w-36 h-10 md:h-12"
			>
				Add Experience
			</Link>
			<Link
				to="/add-education"
				className="flex justify-center flex-initial rounded-3xl my-2 py-3 mx-3 bg-[#54a7ff] hover:scale-105 text-[#101e50] text-xs md:text-base w-24 md:w-36 h-10 md:h-12"
			>
				Add Education
			</Link>
		</div>
	);
};
