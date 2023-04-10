import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light p-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-4">React Boilerplate</span>
			</Link>
			<div className="nav-item ml-auto dropdown">
				<Link to="/demo">
					<button className="btn btn-primary dropdown-toggle me-4 px-4">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
