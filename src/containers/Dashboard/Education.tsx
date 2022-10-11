import React from "react";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profile";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { EducationType } from "../../global.types";

export const Education = () => {
	const education = useAppSelector((state) => state.profile.profile?.education);
	const dispatch = useAppDispatch();
	const educationInfo = education?.map((edu: EducationType) => (
		<tr key={edu._id}>
			<td>{edu.school}</td>
			<td>{edu.course}</td>
			<td>
				<Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
				{edu.to === null ? (
					" Present"
				) : (
					<Moment format="DD/MM/YYYY">{edu.to}</Moment>
				)}
			</td>
			<td>
				<button
					className=" rounded-sm my-2 py-2 ml-10 bg-red-600 text-white border-2 w-20"
					onClick={() => dispatch(deleteEducation(edu._id))}
				>
					Delete
				</button>
			</td>
		</tr>
	));

	return (
		<div className="flex flex-col w-full mb-5">
			<div className=" overflow-x-auto">
				<div className=" p-2 inline-block align-middle">
					<div className=" overflow-hidden border rounded-lg">
						<h2 className=" text-2xl font-medium">Education</h2>
						<table className=" min-w-full divide-y divide-slate-500">
							<thead className=" bg-slate-500">
								<tr className=" text-slate-50">
									<th className=" px-14 py-3 text-base ">School</th>
									<th className=" px-14 py-3 text-base ">Course</th>
									<th className=" px-14 py-3 text-base ">Years</th>
									<th className=" px-14 py-3 text-base ">Delete</th>
								</tr>
							</thead>
							<tbody className="align-middle text-left text-sm ">
								{educationInfo}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
