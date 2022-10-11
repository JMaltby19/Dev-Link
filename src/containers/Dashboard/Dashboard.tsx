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
		<div className="w-full absolute flex justify-center mt-32">
			<div className="flex flex-col justify-center items-center text-center">
				<h1 className=" text-4xl font-bold text-slate-500 my-4">Dashboard</h1>
				<p className=" text-xl font-semibold">
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
								className=" rounded-sm my-2 py-2 ml-10 bg-red-600 text-white border-2 w-36"
								onClick={() => dispatch(deleteAccount())}
							>
								Delete Account
							</button>
						</div>
					</div>
				) : (
					<div className="flex flex-col justify-center items-center py-1">
						<p>You have not yet set up a profile, please add your details:</p>

						<button className="flex justify-center items rounded-sm my-4 py-2 bg-slate-500 text-white border-2 w-32 h-12">
							<Link to="/create-profile">Create Profile</Link>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
