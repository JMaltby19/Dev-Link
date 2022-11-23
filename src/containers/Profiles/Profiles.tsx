import React, { useEffect } from "react";
import { getAllProfiles } from "../../actions/profile";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { ProfileItem } from "./ProfileItem";

export const Profiles = () => {
	const dispatch = useAppDispatch();
	const profiles = useAppSelector((state) => state.profile);

	useEffect(() => {
		dispatch(getAllProfiles());
	}, [dispatch]);

	return (
		<div className="mt-0 max-w-screen-lg:mt-32">
			{profiles.loading ? (
				""
			) : (
				<div className="text-[#e8e8e8] text-center">
					<h1 className=" text-4xl font-extrabold my-4">Developers</h1>
					<div>
						{profiles.profiles.length > 0 ? (
							profiles.profiles.map((profile) => (
								<ProfileItem key={profile._id} profile={profile} />
							))
						) : (
							<h4>No profiles found</h4>
						)}
					</div>
				</div>
			)}
		</div>
	);
};
