import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { ProfileType } from "../../global.types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export const EditProfile = () => {
	const defaultFormData: ProfileType = {
		company: "",
		website: "",
		location: "",
		status: "",
		skills: [""],
		githubusername: "",
		bio: "",
		social: {
			linkedin: "",
			instagram: "",
			twitter: "",
		},
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
		social,
	} = formData;

	// const skills: string[] = formData.skills;

	const [toggleSocials, setToggleSocials] = useState(false);

	const dispatch = useAppDispatch();
	const userProfile = useAppSelector((state) => state.profile);
	const navigate = useNavigate();

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
			social: {
				linkedin:
					loading || !profile?.social?.linkedin ? "" : profile.social.linkedin,
				twitter:
					loading || !profile?.social?.twitter ? "" : profile.social.twitter,
				instagram:
					loading || !profile?.social?.instagram
						? ""
						: profile.social.instagram,
			},
		});
	}, [dispatch, loading, getCurrentProfile]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(createProfile(formData, true));
	};

	const onChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className="w-full h-full">
			<div className=" max-w-screen-xl mx-auto w-full h-full flex flex-col mt-24">
				<div className="flex flex-col justify-center items-center">
					<h1>Create your Profile</h1>
					<p>
						Please enter your details below and lets help make your profile
						stand out!
					</p>
					<small>* required field</small>
					<form
						onSubmit={onSubmit}
						className="flex flex-col justify-center align-middle py-2 w-3/5"
					>
						<select
							name="status"
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
						<input
							type="text"
							placeholder="Company"
							name="company"
							value={company}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						/>
						<input
							type="text"
							placeholder="Website"
							name="website"
							value={website}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						/>
						<input
							type="text"
							placeholder="Location"
							name="location"
							value={location}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						/>
						<input
							type="text"
							placeholder="Skills"
							name="skills"
							value={skills}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						/>
						<input
							type="text"
							placeholder="Github Username"
							name="githubusername"
							value={githubusername}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						/>
						<textarea
							name="bio"
							placeholder="A short description of yourself"
							value={bio}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						></textarea>
						<div className="z-30 flex flex-row justify-center items-center mx-auto">
							<button
								type="button"
								className=" z-30 flex justify-center items rounded-sm my-2 py-2 mx-2 bg-slate-500 text-white border-2 w-32 h-12"
								onClick={() => setToggleSocials(!toggleSocials)}
							>
								Add socials
							</button>
						</div>
						{toggleSocials && (
							<div className="flex flex-col justify-center align-middle py-2 w-full">
								<input
									type="text"
									placeholder="LinkedIn"
									name="linkedin"
									value={social?.linkedin}
									onChange={onChange}
									className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
								/>
								<input
									type="text"
									placeholder="Instagram"
									name="instagram"
									value={social?.instagram}
									onChange={onChange}
									className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
								/>
								<input
									type="text"
									placeholder="Twitter"
									name="twitter"
									value={social?.twitter}
									onChange={onChange}
									className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
								/>
							</div>
						)}
						<button
							type="submit"
							className="flex justify-center items rounded-sm my-2 py-2 mx-2 bg-slate-500 text-white border-2 w-32 h-12"
						>
							Save
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
