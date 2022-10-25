import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProfileById } from "../../actions/profile";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { ProfileAbout } from "./ProfileAbout";
import { ProfileEducation } from "./ProfileEducation";
import { ProfileExperience } from "./ProfileExperience";
import { ProfileGithub } from "./ProfileGithub";
import { ProfileTop } from "./ProfileTop";

export const Profile = () => {
	const dispatch = useAppDispatch();
	const profile = useAppSelector((state) => state.profile?.profile);
	const auth = useAppSelector((state) => state.auth);
	const experience = useAppSelector(
		(state) => state.profile.profile?.experience
	);
	const education = useAppSelector((state) => state.profile.profile?.education);
	const repos = useAppSelector((state) => state.profile.repos);

	const { id } = useParams<{ id?: any }>();

	useEffect(() => {
		dispatch(getProfileById(id));
	}, [dispatch, id]);

	return (
		<div className="relative mt-24">
			<div className="flex justify-around font-medium text-[#A8D0E6] py-4">
				<button>
					<Link to="/profiles">Back to Profiles</Link>
				</button>
				{auth.isAuthenticated &&
					!auth.loading &&
					auth.user?._id === profile?.user?._id && (
						<button>
							<Link to="/edit-profile">Edit Profile</Link>
						</button>
					)}
			</div>
			<div className="flex justify-center items-center flex-col">
				<ProfileTop />
				<ProfileAbout />
				<div className="flex flex-row max-w-screen-xl mx-auto text-center w-4/5 my-5 md:max-w-screen-xl">
					<div className=" max-w-screen-xl mx-auto text-center w-2/4 my-5 px-4 md:max-w-screen-xl">
						<div className="max-w-6xl rounded-md bg-[#d7d7d7]">
							<h2 className=" font-bold text-xl py-4 text-[#101e50] md:text-2xl">
								Experience
							</h2>
							{experience ? (
								<div className="divide-y divide-[#101e50]">
									{experience?.map((exp) => (
										<ProfileExperience key={exp._id} exp={exp} />
									))}
								</div>
							) : (
								<h4>No experience</h4>
							)}
						</div>
					</div>
					<div className=" max-w-screen-xl mx-auto text-center w-2/4 my-5 px-4 md:max-w-screen-2xl">
						<div className="max-w-6xl rounded-md bg-[#d7d7d7]">
							<h2 className=" font-bold text-xl py-4 text-[#101e50] md:text:2xl">
								Education
							</h2>
							{education ? (
								<div className="divide-y divide-[#101e50]">
									{education?.map((edu) => (
										<ProfileEducation key={edu._id} edu={edu} />
									))}
								</div>
							) : (
								<h4>No experience</h4>
							)}
						</div>
					</div>
				</div>
			</div>
			{profile?.githubusername && (
				<ProfileGithub username={profile.githubusername} repos={repos} />
			)}
		</div>
	);
};
