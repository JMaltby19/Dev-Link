import React from "react";
import { Navigate } from "react-router";
import { useAppSelector } from "../../hooks/hooks";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
	const auth = useAppSelector((state) => state.auth);

	return !auth.isAuthenticated && !auth.loading ? (
		<Navigate to="/login" />
	) : (
		children
	);
};
