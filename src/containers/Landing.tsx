import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

export const Landing = () => {
	const auth = useAppSelector((state) => state.auth);

	if (auth.isAuthenticated) {
		return <Navigate to="/dashboard" />;
	}

	return (
		<div className=" min-h-screen">
			<div className=" max-w-screen-xl mx-auto w-full h-full flex flex-col">
				<div className=" mt-72 text-center text-3xl text-[#bbe1fa]">
					<h1 className=" text-5xl font-bold py-8"> Dev-Link</h1>
					<p className=" text-2xl font-light">
						{" "}
						Create your developer profile, share your repos, connect and link
						with other developers and recruiters!
					</p>
				</div>
				<div className="flex justify-center items-center my-5">
					<button className=" flex justify-center items-center rounded-3xl bg-[#4395ec] text-[#101e50] hover:scale-105 w-24 h-10">
						<Link to="/register">Sign Up</Link>
					</button>
					<button className=" flex justify-center items-center ml-6 rounded-3xl text-[#4395ec] border-[#4395ec] border-2 hover:scale-105 w-24 h-10">
						<Link to="/login">Login</Link>
					</button>
				</div>
			</div>
		</div>
	);
};
