import React from "react";
import { ExperienceType } from "../../global.types";
import Moment from "react-moment";

interface ExperienceProps {
	exp: ExperienceType;
}

export const ProfileExperience = ({ exp }: ExperienceProps) => {
	// const experience = useAppSelector(
	// 	(state) => state.profile?.profile?.experience
	// );

	return (
		<div>
			<div>
				<div className="flex justify-center items-center px-2 flex-col md:items-start">
					<h3 className=" font-bold text-xl py-4 text-[#24305e]">
						{exp.company}
					</h3>
					<p className=" font-normal text-lg py-4 text-[#24305e]">
						<Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
						{!exp.to ? " Now" : <Moment format="DD/MM/YYYY">{exp.to}</Moment>}
					</p>
					<div className=" font-semibold text-lg py-4 text-[#24305e] flex flex-col md:text-xl md:flex-row">
						Position: <p className="font-normal indent-2">{exp.title}</p>
					</div>
					<div className=" font-semibold text-lg py-4 text-[#24305e] flex flex-col md:text-xl md:flex-row">
						Location:{" "}
						<span className="font-normal indent-2">{exp.location}</span>
					</div>
					<div className=" font-semibold text-lg py-4 text-[#24305e] flex flex-col md:text-xl md:flex-row">
						Description:{" "}
						<p className="font-normal indent-2">{exp.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
