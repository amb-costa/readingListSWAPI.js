import React, { useContext, useEffect, useState } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import CardCharacter from "../component/cardCharacter.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<div className="container-fluid">
			<div className=" text-center mt-5 mb-5">
				<h1 className="text-center">Characters</h1>
				<div>
					{store.readyCharacters == true ? console.log(store.characters) : <p>loading...</p>}
				</div>
				<h1 className="text-center">Planets</h1>
				<div>
					{store.readyPlanets == true ? console.log(store.planets) : <p>loading...</p>}
				</div>
				<h1 className="text-center">Vehicles</h1>
				<div>
					{store.readyVehicles == true ? console.log(store.vehicles) : <p>loading...</p>}
				</div>
			</div>
		</div>
	);
};