import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

export const Landing = () => {
	const auth = useAppSelector((state) => state.auth);

	if (auth.isAuthenticated) {
		return <Navigate to="/dashboard" />;
	}

	return (
		<div className="w-full h-full relative">
			<div className=" max-w-screen-xl mx-auto w-full h-full flex flex-col">
				<div className=" mt-96 text-center text-3xl">
					<h1 className=" text-5xl font-bold py-8"> Developer Community</h1>
					Create your developer profile, share your repos, comment and like and
					connect with other developers!
				</div>
				<div className="flex justify-center items-center my-5">
					<button className=" flex justify-center items-center rounded-sm bg-slate-500 text-white border-2 w-24 h-10">
						<Link to="/register">Sign Up</Link>
					</button>
					<button className=" flex justify-center items-center ml-6 rounded-sm border-gray-500 border-2 w-24 h-10">
						<Link to="/login">Login</Link>
					</button>
				</div>
			</div>
		</div>
	);
};
