import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Favorite from "./pages/favorite/Favorite";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {AuthContext} from "./context/AuthContext";

import "./app.scss";
import { useContext } from "react";

const App = () => {
	const { currentUser } = useContext(AuthContext);

	const RequireAuth = ({ children }) => {
		return currentUser ? children : <Navigate to="/login" />;
	};

	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/">
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route index element={<Home />} />
						<Route path="single/:id" element={<Single />} />
						{/*
						<Route
							path="favorite"
							element={
								<RequireAuth>
									<Favorite />
								</RequireAuth>
							}
						/> */}
						<Route
							path="favorite"
							element={
									<Favorite />
							}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
