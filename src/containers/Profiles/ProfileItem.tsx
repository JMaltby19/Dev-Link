import React from "react";
import { Link } from "react-router-dom";
import { ProfileType } from "../../global.types";

interface ProfileItemProps {
	profile: ProfileType;
}

export const ProfileItem = ({ profile }: ProfileItemProps) => {
	const { user, status, company, location, skills } = profile;

	return (
		<div className="mt-32">
			<div>
				<h2>{user?.name}</h2>
				<p>
					{status} {company && <span>at {company}</span>}
				</p>
				<p>{location && <span>{location}</span>}</p>
				<Link to={`/profile/${user?._id}`}>View profile</Link>
			</div>
			<ul>
				{skills.slice(0, 6).map((skill, i) => (
					<li key={i}>{skill}</li>
				))}
			</ul>
		</div>
	);
};
