import React, { useState } from "react";
import { Navigate } from "react-router";
import { login } from "../../actions/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setAlert } from "../../actions/alert";

export const Login = () => {
	const defaultFormData = {
		email: "",
		password: "",
	};
	const [formData, setFormData] = useState(defaultFormData);

	const { email, password } = formData;

	const dispatch = useAppDispatch();

	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(login({ email, password }));
	};

	if (isAuthenticated) {
		return <Navigate to="/dashboard" />;
	}

	return (
		<div className="w-full h-full">
			<div className=" max-w-screen-xl mx-auto w-full h-full flex flex-col">
				<div className=" mt-32 text-center text-3xl">
					<h1 className=" text-5xl text-[#e8e8e8] font-extrabold py-10">
						Sign In
					</h1>
					<h3 className="text-[#e8e8e8] py-4">Sign in to your account</h3>
				</div>
				<form
					className="flex flex-col justify-center align-middle py-2"
					onSubmit={onSubmit}
				>
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

					<button
						className=" flex justify-center items-center  rounded-3xl bg-[#54a7ff] hover:scale-105 w-24 h-10"
						type="submit"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};
