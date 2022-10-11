import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Logout } from "../actions/auth";

export const Nav: React.FC = () => {
	const dispatch = useAppDispatch();
	const auth = useAppSelector((state) => state.auth);

	const authLinks = (
		<ul className="flex justify-end">
			<li className=" pr-4 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-125  tracking-wider ">
				<Link to="/profiles">
					<span> Developers</span>
				</Link>
			</li>
			<li className=" pr-4 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-125  tracking-wider ">
				<Link to="/dashboard">
					<span> Dashboard</span>
				</Link>
			</li>
			<li className=" pr-4 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-125  tracking-wider ">
				<Link onClick={() => dispatch(Logout())} to="/">
					<span> Logout</span>
				</Link>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul className="flex justify-end ">
			<li className=" pr-4 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-125  tracking-wider ">
				<Link to="/profiles">
					<span> Developers</span>
				</Link>
			</li>
			<li className=" pr-4 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-125  tracking-wider ">
				<Link to="/register">Register</Link>
			</li>
			<li className=" pr-4 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-125  tracking-wider ">
				<Link to="/Login">Login</Link>
			</li>
		</ul>
	);

	return (
		<div className=" z-10 w-full h-20 fixed bg-slate-500 text-black">
			<nav className="flex justify-between items-center w-full max-w-screen-lg mx-auto p-6">
				<h1>
					<Link to="/">DevComm</Link>
				</h1>
				{!auth.loading && (
					<div>{auth.isAuthenticated ? authLinks : guestLinks}</div>
				)}
			</nav>
		</div>
	);
};
