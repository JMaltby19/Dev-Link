import React from "react";
import { Link } from "react-router-dom";
import { ProfileType } from "../../global.types";

interface ProfileItemProps {
	profile: ProfileType;
}

export const ProfileItem = ({ profile }: ProfileItemProps) => {
	const { user, status, company, location, skills } = profile;

	return (
		<div className=" max-w-screen-xl mx-auto py-4 text-center w-4/5 md:max-w-screen-2xl">
			<div className="flex justify-around items-center rounded-md bg-[#3e38b163] text-[#e8e8e8] py-6">
				<div className="relative flex justify-center items-center text-center flex-col w-2/5">
					<h2 className=" text-2xl font-semibold">{user?.name}</h2>
					<p className="pb-4">
						{status} {company && <span>at {company}</span>}
					</p>
					<p>{location && <span>{location}</span>}</p>
					<button className=" rounded-3xl bg-[#54a7ff] text-[#101e50] text-sm  hover:scale-105 w-24 h-10 mx-auto my-4">
						<Link to={`/profile/${user?._id}`}>View profile</Link>
					</button>
				</div>
				<ul className=" text-[#54a7ff]">
					{skills.slice(0, 8).map((skill, i) => (
						<li key={i}>{skill}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
