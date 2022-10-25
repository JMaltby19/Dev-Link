import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Landing } from "./containers/Landing";
import { Register } from "./containers/Auth/Register";
import { Login } from "./containers/Auth/Login";
import { Provider } from "react-redux";
import { store } from "./store";
import { Alert } from "./components/Layout/Alert";
import { loadUser } from "./actions/auth";
import { Dashboard } from "./containers/Dashboard/Dashboard";
import { setAuthToken } from "./utils/setAuthToken";
import { PrivateRoute } from "./components/Routing/PrivateRoute";
import { CreateProfile } from "./containers/ProfileForm/CreateProfile";
import { EditProfile } from "./containers/ProfileForm/EditProfile";
import { AddExperience } from "./containers/ProfileForm/AddExperience";
import { AddEducation } from "./containers/ProfileForm/AddEducation";
import { Profiles } from "./containers/Profiles/Profiles";
import { Profile } from "./containers/Profile/Profile";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<div className="min-h-screen bg-[#101e50]">
				<Nav />
				<section>
					<Alert />
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/profiles" element={<Profiles />} />
						<Route path="/profile/:id" element={<Profile />} />

						<Route
							path="/dashboard"
							element={
								<PrivateRoute>
									<Dashboard />
								</PrivateRoute>
							}
						/>
						<Route
							path="/create-profile"
							element={
								<PrivateRoute>
									<CreateProfile />
								</PrivateRoute>
							}
						/>
						<Route
							path="/edit-profile"
							element={
								<PrivateRoute>
									<EditProfile />
								</PrivateRoute>
							}
						/>
						<Route
							path="/add-experience"
							element={
								<PrivateRoute>
									<AddExperience />
								</PrivateRoute>
							}
						/>
						<Route
							path="/add-education"
							element={
								<PrivateRoute>
									<AddEducation />
								</PrivateRoute>
							}
						/>
					</Routes>
				</section>
			</div>
		</Provider>
	);
};

export default App;
