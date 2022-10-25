import React from "react";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profile";
import { ExperienceType } from "../../global.types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export const Experience = () => {
	const experience = useAppSelector(
		(state) => state.profile.profile?.experience
	);
	const dispatch = useAppDispatch();

	const experiences = experience?.map((exp: ExperienceType) => (
		<tr
			key={exp._id}
			className="px-4 flex flex-col text-left md:flex-row justify-between md:items-center "
		>
			<td className="py-4">{exp.company}</td>
			<td className="py-4">{exp.title}</td>
			<td className="py-4">
				<Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
				{exp.to === null ? (
					" Present"
				) : (
					<Moment format="DD/MM/YYYY">{exp.to}</Moment>
				)}
			</td>
			<td className="pt-2">
				<button
					className=" rounded-3xl my-2 py-2 bg-red-600 hover:bg-red-800 text-white border-2 w-20"
					onClick={() => dispatch(deleteExperience(exp._id))}
				>
					Delete
				</button>
			</td>
		</tr>
	));

	return (
		<div className=" max-w-screen-xl mx-auto w-5/6 md:w-full flex flex-col mb-10 py-4">
			<div className="bg-[#3e38b163] py-4 my-4 overflow-hidden rounded-lg">
				<h2 className=" text-lg font-bold text-[#e8e8e8] py-4 md:text-2xl">
					Experience
				</h2>
				<table className=" flex flex-row divide-y divide-slate-500  md:min-w-full md:flex-col ">
					<thead className=" bg-slate-500">
						<tr className="h-full flex flex-col text-slate-50 justify-between md:flex-row md:min-w-full ">
							<th className=" px-4 py-6 text-sm md:text-base ">Company</th>
							<th className=" px-4 py-6 text-sm md:text-base ">Title</th>
							<th className=" px-4 py-6 text-sm md:text-base ">Years</th>
							<th className=" px-4 py-6 text-sm md:text-base ">Delete</th>
						</tr>
					</thead>
					<tbody className=" flex flex-row md:flex-col md:indent-3 text-xs md:text-sm text-[#e8e8e8]">
						{experiences}
					</tbody>
				</table>
			</div>
		</div>
	);
};
