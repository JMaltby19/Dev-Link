import React, { useState, useEffect, useRef } from "react";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export const EditProfile = () => {
	const defaultFormData = {
		company: "",
		website: "",
		location: "",
		status: "",
		skills: [""],
		githubusername: "",
		bio: "",
		linkedin: "",
		instagram: "",
		twitter: "",
	};
	const [formData, setFormData] = useState(defaultFormData);

	const {
		company,
		website,
		location,
		status,
		skills,
		githubusername,
		bio,
		linkedin,
		instagram,
		twitter,
	} = formData;

	// const skills: string[] = formData.skills;
	// const { linkedin } = formData.social;

	const [toggleSocials, setToggleSocials] = useState(false);

	const dispatch = useAppDispatch();
	const userProfile = useAppSelector((state) => state.profile);

	const { profile, loading } = userProfile;

	useEffect(() => {
		dispatch(getCurrentProfile());
		setFormData({
			company: loading || !profile?.company ? "" : profile.company,
			website: loading || !profile?.website ? "" : profile.website,
			location: loading || !profile?.location ? "" : profile.location,
			status: loading || !profile?.status ? "" : profile.status,
			skills: [loading || !profile?.skills ? "" : profile.skills.join(", ")],
			githubusername:
				loading || !profile?.githubusername ? "" : profile.githubusername,
			bio: loading || !profile?.bio ? "" : profile.bio,
			linkedin:
				loading || !profile?.social?.linkedin ? "" : profile.social.linkedin,
			twitter:
				loading || !profile?.social?.twitter ? "" : profile.social.twitter,
			instagram:
				loading || !profile?.social?.instagram ? "" : profile.social.instagram,
		});
	}, [dispatch, loading, getCurrentProfile]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(createProfile(formData, true));
	};

	const inputRef = useRef<HTMLInputElement | null>(null);

	const onChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	return (
		<div className="w-full h-full">
			<div className=" max-w-screen-xl mx-auto w-full h-full flex flex-col pt-24">
				<div className="flex flex-col justify-center items-center text-[#e8e8e8]">
					<h1 className="text-lg font-medium">Create your Profile</h1>
					<p className=" text-center">
						Please enter your details below and lets help make your profile
						stand out!
					</p>
					<small>* required field</small>
					<form
						onSubmit={onSubmit}
						className="flex flex-col justify-center align-middle py-2 w-3/5 text-black"
					>
						<small className="text-[#e8e8e8] py-2">*Current position </small>
						<select
							id="status"
							value={status}
							// id="status"
							onChange={onChange}
						>
							<option value="0">Select status</option>
							<option value="Graduate">Graduate</option>
							<option value="Junior Developer">Junior Developer</option>
							<option value="Senior Developer">Senior Developer</option>
							<option value="Lead Developer">Lead Developer</option>
							<option value="Manager">Manager</option>
							<option value="Student">Student</option>
							<option value="Intern">Intern</option>
							<option value="Other">Other</option>
						</select>
						<small className="text-[#e8e8e8] py-2">
							Which Company are you currently working at
						</small>
						<input
							type="text"
							placeholder="Company"
							id="company"
							value={company}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						/>
						<small className="text-[#e8e8e8] py-2">
							Do you have a website?
						</small>
						<input
							type="text"
							placeholder="Website"
							id="website"
							value={website}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						/>
						<small className="text-[#e8e8e8] py-2">
							Where are you located?
						</small>
						<input
							type="text"
							placeholder="Location"
							id="location"
							value={location}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						/>
						<small className="text-[#e8e8e8] py-2">
							*What tech skills do you possess?
						</small>
						<input
							type="text"
							placeholder="Skills"
							id="skills"
							value={skills}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						/>
						<small className="text-[#e8e8e8] py-2">
							Do you have a GitHub account?
						</small>
						<input
							type="text"
							placeholder="Github Username"
							id="githubusername"
							value={githubusername}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						/>
						<small className="text-[#e8e8e8] py-2">
							Tell us a bit about yourself
						</small>
						<textarea
							id="bio"
							placeholder="A short description of yourself"
							value={bio}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						></textarea>
						<div className="z-30 flex flex-row justify-center items-center mx-auto">
							<button
								type="button"
								className=" z-30 flex justify-center items rounded-3xl my-2 py-3 mx-2 bg-[#54a7ff] hover:bg-[#54a7ff78] w-32 h-12"
								onClick={() => setToggleSocials(!toggleSocials)}
							>
								Add socials
							</button>
						</div>
						{toggleSocials && (
							<div className="flex flex-col justify-center align-middle py-2 w-full">
								<small className="text-[#e8e8e8] py-2">LinkedIn</small>
								<input
									type="text"
									placeholder="LinkedIn"
									id="linkedin"
									value={linkedin}
									onChange={onChange}
									className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
								/>
								<small className="text-[#e8e8e8] py-2">Instagram </small>
								<input
									type="text"
									placeholder="Instagram"
									id="instagram"
									value={instagram}
									onChange={onChange}
									className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
								/>
								<small className="text-[#e8e8e8] py-2">Twitter</small>
								<input
									type="text"
									placeholder="Twitter"
									id="twitter"
									value={twitter}
									onChange={onChange}
									className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
								/>
							</div>
						)}
						<button
							type="submit"
							className="flex justify-center items rounded-3xl my-2 py-3 mx-2 bg-[#54a7ff] hover:bg-[#54a7ff78] w-32 h-12"
						>
							Save
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
