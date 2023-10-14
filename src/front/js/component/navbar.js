import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
					{
						!store.token && <>
							<li className="nav-item">
								<Link to="/login">
									<button className="btn btn-danger mx-3">
										Login
										<i className="fa-solid fa-user"></i>
									</button>
								</Link>
							</li>
						</>
					}
					{
						store.token && <>
							<li className="nav-item mx-3 mt-2">
								<button className="btn btn-danger" onClick={() => actions.logOut()}>
									<i className="fa-solid fa-right-from-bracket"></i>
									Logout
								</button>
							</li>
						</>
					}
				</ul>
			</div>
		</nav>
	);
};
