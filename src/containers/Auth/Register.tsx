import React, { useState } from "react";
import { Navigate } from "react-router";
import { setAlert } from "../../actions/alert";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { register } from "../../actions/auth";

export const Register = () => {
	const defaultFormData = {
		name: "",
		email: "",
		password: "",
		password2: "",
	};
	const [formData, setFormData] = useState(defaultFormData);

	// const dispatch = useDispatch();
	const dispatch = useAppDispatch();
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
	// const isAuthenticated = useSelector<RootState, RootState["auth"]>(
	// 	(state) => state.auth
	// );

	const { name, email, password, password2 } = formData;

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password !== password2) {
			dispatch<any>(setAlert("Passwords do not match", "danger"));
		} else {
			dispatch<any>(register({ name, email, password }));
		}
	};

	if (isAuthenticated) {
		return <Navigate to="/dashboard" />;
	}

	return (
		<div className="w-full h-screen">
			<div className=" max-w-screen-xl h-full mx-auto flex flex-col">
				<div className=" mt-32 text-center text-3xl">
					<h1 className=" text-5xl text-[#e8e8e8] font-extrabold py-10">
						Sign up
					</h1>
					<h3 className="text-[#e8e8e8] py-4">Create your account</h3>
				</div>
				<form
					className="flex flex-col justify-center align-middle  py-2"
					onSubmit={onSubmit}
				>
					<input
						type="text"
						placeholder="Name"
						className=" block border-4 rounded-lg text-xl mb-6 py-2 px-2 shadow-md focus:shadow-2xl"
						value={name}
						id="name"
						onChange={onChange}
						required
					/>
					<input
						type="text"
						placeholder="Email"
						className=" block border-4 rounded-lg text-xl mb-6 py-2 px-2 shadow-md focus:shadow-2xl"
						value={email}
						id="email"
						onChange={onChange}
					/>
					<input
						type="text"
						placeholder="Password"
						className=" block border-4 rounded-lg text-xl mb-6 py-2 px-2 shadow-md focus:shadow-2xl"
						value={password}
						id="password"
						onChange={onChange}
					/>
					<input
						type="text"
						placeholder="Confirm Password"
						className=" block border-4 rounded-lg text-xl mb-6 py-2 px-2 shadow-md focus:shadow-2xl"
						value={password2}
						id="password2"
						onChange={onChange}
					/>
					<button
						className=" flex justify-center items-center rounded-3xl bg-[#54a7ff] hover:scale-105  w-24 h-10"
						type="submit"
					>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
