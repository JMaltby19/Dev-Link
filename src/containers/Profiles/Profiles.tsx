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
		<div>
			{profiles.loading ? (
				""
			) : (
				<div>
					<h1>Developers</h1>
					<p>Browse developers</p>
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
