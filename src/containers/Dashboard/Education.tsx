import React from "react";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profile";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { EducationType } from "../../global.types";

export const Education = () => {
	const education = useAppSelector((state) => state.profile.profile?.education);
	const dispatch = useAppDispatch();
	const educationInfo = education?.map((edu: EducationType) => (
		<tr
			key={edu._id}
			className="px-4 flex flex-col text-left md:flex-row justify-between  md:items-center "
		>
			<td className="py-4">{edu.school}</td>
			<td className="py-4">{edu.course}</td>
			<td className="py-4">
				<Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
				{edu.to === null ? (
					" Present"
				) : (
					<Moment format="DD/MM/YYYY">{edu.to}</Moment>
				)}
			</td>
			<td className="pt-2">
				<button
					className=" rounded-3xl my-2 py-2 bg-red-600 hover:bg-red-800 text-white border-2 w-20"
					onClick={() => dispatch(deleteEducation(edu._id))}
				>
					Delete
				</button>
			</td>
		</tr>
	));

	return (
		<div className=" max-w-screen-xl mx-auto w-4/6 md:w-full flex flex-col mb-10 py-4">
			<div className="bg-[#3e38b163] py-4 my-4 overflow-hidden rounded-lg">
				<h2 className=" text-lg font-bold text-[#e8e8e8] py-4 md:text-2xl">
					Education
				</h2>
				<table className=" flex flex-row divide-y divide-slate-500  md:min-w-full md:flex-col ">
					<thead className=" bg-slate-500">
						<tr className="h-full flex flex-col text-slate-50 justify-between md:flex-row md:min-w-full ">
							<th className=" px-4 py-6 text-sm md:text-base ">School</th>
							<th className=" px-4 py-6 text-sm md:text-base ">Course</th>
							<th className=" px-4 py-6 text-sm md:text-base ">Years</th>
							<th className=" px-4 py-6 text-sm md:text-base ">Delete</th>
						</tr>
					</thead>
					<tbody className=" flex flex-row md:flex-col md:indent-3 text-xs md:text-sm text-[#e8e8e8]">
						{educationInfo}
					</tbody>
				</table>
			</div>
		</div>
	);
};
