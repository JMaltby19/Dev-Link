import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { DashboardLinks } from "./DashboardLinks";
import { Education } from "./Education";
import { Experience } from "./Experience";

export const Dashboard = () => {
	const dispatch = useAppDispatch();
	const auth = useAppSelector((state) => state.auth);
	const profile = useAppSelector((state) => state.profile);

	useEffect(() => {
		dispatch(getCurrentProfile());
	}, [dispatch]);

	return (
		<div className="w-full h-full flex justify-center mt-32">
			<div className=" flex flex-col justify-center items-center text-center">
				<h1 className=" text-4xl font-extrabold text-[#e8e8e8]">Dashboard</h1>
				<p className=" text-2xl text-[#e8e8e8] font-semibold my-4">
					{" "}
					Welcome {auth.user && auth.user.name}
				</p>
				{profile.profile !== null ? (
					<div>
						<DashboardLinks />
						<Experience />
						<Education />
						<div>
							<button
								className=" rounded-3xl my-4 py-2 bg-red-600 hover:bg-red-800 text-white border-2 w-36"
								onClick={() => dispatch(deleteAccount())}
							>
								Delete Account
							</button>
						</div>
					</div>
				) : (
					<div className="flex flex-col justify-center items-center py-1 text-[#e8e8e8]">
						<p>You have not yet set up a profile, please add your details:</p>

						<button className="flex justify-center items rounded-3xl my-4 py-2 bg-[#54a7ff] hover:scale-105 text-[#101e50] text w-32 h-10">
							<Link to="/create-profile">Create Profile</Link>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
