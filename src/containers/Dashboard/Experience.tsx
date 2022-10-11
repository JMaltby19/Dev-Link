import React from "react";
import Moment from "react-moment";
import { ActionTypes } from "../../actions/action.types";
import { deleteExperience } from "../../actions/profile";
import { EducationType, ExperienceType } from "../../global.types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export const Experience = () => {
	const experience = useAppSelector(
		(state) => state.profile.profile?.experience
	);
	const dispatch = useAppDispatch();

	const experiences = experience?.map((exp: ExperienceType) => (
		<tr key={exp._id}>
			<td>{exp.company}</td>
			<td>{exp.title}</td>
			<td>
				<Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
				{exp.to === null ? (
					" Present"
				) : (
					<Moment format="DD/MM/YYYY">{exp.to}</Moment>
				)}
			</td>
			<td>
				<button
					className=" rounded-sm my-2 py-2 ml-10 bg-red-600 text-white border-2 w-20"
					onClick={() => dispatch(deleteExperience(exp._id))}
				>
					Delete
				</button>
			</td>
		</tr>
	));

	return (
		<div className="flex flex-col w-full mb-10">
			<div className=" overflow-x-auto">
				<div className=" p-2 inline-block align-middle">
					<div className=" overflow-hidden border rounded-lg">
						<h2 className=" text-2xl font-medium">Experience</h2>
						<table className=" min-w-full divide-y divide-slate-500">
							<thead className=" bg-slate-500">
								<tr className=" text-slate-50">
									<th className=" px-14 py-3 text-base ">Company</th>
									<th className=" px-14 py-3 text-base ">Title</th>
									<th className=" px-14 py-3 text-base ">Years</th>
									<th className=" px-14 py-3 text-base ">Delete</th>
								</tr>
							</thead>
							<tbody className="align-middle text-left text-sm ">
								{experiences}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
