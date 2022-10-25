import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { FaCheckCircle } from "react-icons/fa";

export const ProfileAbout = () => {
	const profile = useAppSelector((state) => state.profile.profile);

	return (
		<div className=" max-w-screen-xl mx-auto text-center w-4/5 my-5 md:max-w-screen-2xl">
			<div className="max-w-6xl rounded-md bg-[#d7d7d7]">
				<div className="flex justify-center items-center flex-col">
					<h2 className=" font-bold text-2xl py-4 text-[#101e50]">
						{profile?.user?.name && profile.user.name.trim().split(" ")[0]}'s
						Bio
					</h2>
					<p className=" font-normal text-lg py-4 text-[#101e50]">
						{profile?.bio && profile.bio}
					</p>
					<h2 className=" font-bold text-2xl py-4 text-[#101e50]">Skills:</h2>
					<div className="flex flex-col items-start font-normal text-lg py-4 text-[#101e50] md:flex-row">
						{profile?.skills &&
							profile.skills.map((skill, i) => (
								<div
									key={i}
									className="px-3 flex flex-row justify-center items-center"
								>
									<FaCheckCircle />
									{skill}
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};
