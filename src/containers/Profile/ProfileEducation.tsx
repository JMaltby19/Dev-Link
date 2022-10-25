import React from "react";
import { EducationType } from "../../global.types";
import Moment from "react-moment";

interface EductaionProps {
	edu: EducationType;
}

export const ProfileEducation = ({ edu }: EductaionProps) => {
	return (
		<div>
			<div>
				<div className="flex justify-center items-center px-2 flex-col md:items-start">
					<h3 className=" font-bold text-xl py-4 text-[#24305e]">
						{edu.school}
					</h3>
					<p className=" font-normal text-lg py-4 text-[#24305e]">
						<Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
						{!edu.to ? " Now" : <Moment format="DD/MM/YYYY">{edu.to}</Moment>}
					</p>
					<div className=" font-semibold text-lg py-4 text-[#24305e] flex flex-col md:text-xl md:flex-row">
						Course: <p className="font-normal indent-2">{edu.course}</p>
					</div>
					<div className=" font-semibold text-lg py-4 text-[#24305e] flex flex-col md:text-xl md:flex-row">
						Field of Study:{" "}
						<p className="font-normal indent-2">{edu.fieldOfStudy}</p>
					</div>

					<div className=" font-semibold text-lg py-4 text-[#24305e] flex flex-col md:text-xl md:flex-row">
						Description:{" "}
						<p className="font-normal indent-2">{edu.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
