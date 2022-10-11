import React, { useState } from "react";
import { addEducation } from "../../actions/profile";
import { useAppDispatch } from "../../hooks/hooks";
import { useNavigate } from "react-router";
import moment from "moment";

export const AddEducation = () => {
	const defaultFormData = {
		school: "",
		course: "",
		fieldOfStudy: "",
		from: new Date(),
		to: null,
		current: false,
		description: "",
	};

	const [formData, setFormData] = useState(defaultFormData);

	const { school, course, fieldOfStudy, from, to, current, description } =
		formData;

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(addEducation(formData));
		navigate("/dashboard");
	};

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
					<h1>Add an Education</h1>
					<small>* required field</small>
					<form
						onSubmit={onSubmit}
						className="flex flex-col justify-center align-middle py-2 w-3/5"
					>
						<input
							type="text"
							placeholder="* School or Bootcamp"
							name="school"
							value={school}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						/>
						<input
							type="text"
							placeholder="* Course"
							name="course"
							value={course}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						/>
						<input
							type="text"
							placeholder="Field of study"
							name="fieldOfStudy"
							value={fieldOfStudy}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						/>
						<h3>From Date</h3>
						<input
							type="date"
							placeholder="From"
							name="from"
							value={moment(from).format("YYYY-MM-DD")}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						/>
						<p>
							<input
								type="checkbox"
								name="current"
								checked={current}
								onChange={() => setFormData({ ...formData, current: !current })}
							/>
							Current study
						</p>
						<h3>To Date</h3>
						<input
							type="date"
							placeholder="To"
							name="to"
							value={moment(to).format("YYYY-MM-DD")}
							onChange={onChange}
							disabled={current}
							className={
								!current
									? "block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
									: " text-slate-300 block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl "
							}
						/>
						<textarea
							name="description"
							placeholder="Job description"
							value={description}
							onChange={onChange}
							className="block border-4 rounded-lg text-xl my-2 py-1 px-2 shadow-md focus:shadow-2xl"
						></textarea>

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
