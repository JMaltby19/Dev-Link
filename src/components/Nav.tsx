import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Logout } from "../actions/auth";
import logo from "../assets/934451e1c1e24313ae6c66778e96f9ab-removebg-preview.png";
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav: React.FC = () => {
	const dispatch = useAppDispatch();
	const auth = useAppSelector((state) => state.auth);

	const [active, setActive] = useState(false);

	const authLinks = (
		<ul className="flex flex-col justify-end items-center h-fit gap-20 my-48 md:flex-row md:my-0 md:gap-2">
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
		<ul className="flex flex-col justify-end items-center h-fit gap-20 my-48 md:flex-row md:my-0 md:gap-2">
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
		<div className=" z-10 w-full h-20 fixed bg-[#101e50] text-[#54a7ff]">
			<nav className="flex justify-between items-center w-full max-w-screen-lg mx-auto p-8">
				<div>
					<Link to="/">
						<img src={logo} alt="" className="absolute bottom-6" />
					</Link>
				</div>
				{!auth.loading && (
					<div className="hidden md:flex">
						{auth.isAuthenticated ? authLinks : guestLinks}
					</div>
				)}
				<div
					onClick={() => setActive(!active)}
					className="z-10 block md:hidden"
				>
					{!active ? <FaBars size={20} /> : <FaTimes size={20} />}
				</div>
				<div
					className={
						active
							? "fixed right-0 top-0 w-[60%] h-full border-r borderrgray900 bg-[#101e50] ease-in-out duration-200 md:hidden"
							: "ease-in-out duration-200 fixed right-[-100%]"
					}
				>
					{" "}
					{!auth.loading && (
						<div onClick={() => setActive(!active)}>
							{auth.isAuthenticated ? authLinks : guestLinks}
						</div>
					)}
				</div>
			</nav>
		</div>
	);
};
