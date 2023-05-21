import React, { useContext, useEffect, useState } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import CardCharacter from "../component/cardCharacter.jsx";

//Home: render for whole page
//will check all three fetch are completed before rendering each card
//if not, renders a waiting message
//delivers object representing a single character/planet/vehicle, to corresponding card component (using map)
export const Home = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<div className="container-fluid m-0 p-2">
			<div className="row m-0 p-1">
				<h3 className="col-12 my-1 text-start">Characters</h3>
				<div className="col-12 container-fluid d-flex overflow-scroll my-1 py-1">
					{store.readyCharacters? 
						store.characters.map((character, index) => (
							<div key={index}>
								<CardCharacter character={character}/>
							</div>			
					)) : console.log(store.readyCharacters)}
				</div>
			</div>
			<div className="row">
				<h1 className="col-12">Planets</h1>
				<div className="col-12 container-fluid d-flex overflow-scroll">
					{store.readyPlanets? console.log(store.planets) : <p>no</p>}
				</div>
			</div>
			<div className="row">
				<h1 className="col-12">Vehicles</h1>
				<div className="col-12 container-fluid d-flex overflow-scroll-x">
					{store.readyVehicles? <p>yes</p>: <p>no</p>}
				</div>
			</div>
		</div>
	);
};

