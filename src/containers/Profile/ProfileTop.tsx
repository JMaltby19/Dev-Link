import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { FaGlobe, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const ProfileTop = () => {
	const profile = useAppSelector((state) => state.profile.profile);

	// const {user, status, company, location, social} = profile;

	return (
		<div className=" max-w-screen-xl mx-auto text-center w-4/5 md:max-w-screen-2xl">
			<div className="max-w-8xl rounded-md bg-[#3e38b163]">
				<div className="flex justify-center items-center flex-col">
					<h1 className=" font-bold text-4xl py-4 text-[#e8e8e8]">
						{profile?.user?.name}
					</h1>
					<p className=" font-medium text-2xl py-4 text-[#e8e8e8]">
						{profile?.status}{" "}
						{profile?.company && <span> at {profile.company}</span>}
					</p>
					<p className=" font-normal text-lg py-4 text-[#e8e8e8]">
						{profile?.location && profile.location}
					</p>
					{profile?.website && (
						<a href={profile.website} target="blank" rel="noopener noreferrer">
							<FaGlobe
								size={30}
								className=" text-[#4395ec] hover:text-[#e8e8e8]"
							/>
						</a>
					)}

					<div className="flex flex-row justify-around mx-auto py-4">
						{profile?.githubusername && (
							<a
								href={`https://github.com/${profile.githubusername}`}
								target="blank"
								rel="noopener noreferrer"
								className=" text-[#54a7ff] hover:text-[#e8e8e8] px-4"
							>
								<FaGithub size={30} />
							</a>
						)}
						{profile?.social && profile.social.linkedin && (
							<a
								href={profile.social.linkedin}
								target="blank"
								rel="noopener noreferrer"
								className=" text-[#54a7ff] hover:text-[#e8e8e8] px-4"
							>
								<FaLinkedin size={30} />
							</a>
						)}
						{profile?.social && profile.social.instagram && (
							<a
								href={profile.social.instagram}
								target="blank"
								rel="noopener noreferrer"
								className=" text-[#54a7ff] hover:text-[#e8e8e8] px-4"
							>
								<FaInstagram size={30} />
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
