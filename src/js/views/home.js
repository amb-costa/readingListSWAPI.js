import React, { useContext, useEffect, useState } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import CardMe from "../component/cardMe.jsx";

//Home: render for whole page
//will check all three fetch are completed before rendering each card
//if not, renders a waiting message
//delivers object representing a single character/planet/vehicle, to corresponding card component (using map)
export const Home = () => {
	const { store, actions } = useContext(Context);

	const Loader = () => {
		return (
			<div className="align-items-center d-flex mx-2">
				<div className="spinner-border spinner-border-sm text-danger" role="status"/>
				<span className="mx-2">Wait for the page to fully load...</span>
			</div>)	
	}
	
	return (
		<div className="container-fluid m-0 p-2">
			<div className="row mx-0 my-2 p-1">
				<h3 className="col-12 my-1 text-start text-danger">Characters</h3>
				<div className="col-12 container-fluid d-flex overflow-scroll my-1 p-1">
					{store.readyCharacters? 
						store.characters.map((character, index) => (
							<div className="container-fluid p-0 mx-2" key={index}>
								<CardMe id={index} single={character} section="characters"/>
							</div>			
					)) : <Loader/>}
				</div>
			</div>
			<div className="row m-0 p-1">
				<h3 className="col-12 my-1 text-start text-danger">Planets</h3>
				<div className="col-12 container-fluid d-flex overflow-scroll my-1 p-1">
					{store.readyPlanets? 
						store.planets.map((planet, index) => (
							<div className="container-fluid p-0 mx-2" key={index}>
								<CardMe id={index} single={planet} section="planets"/>
							</div>			
					)) : <Loader/>}
				</div>
			</div>
			<div className="row m-0 p-1">
				<h3 className="col-12 my-1 text-star text-danger">Vehicles</h3>
				<div className="col-12 container-fluid d-flex overflow-scroll my-1 p-1">
					{store.readyVehicles? 
						store.vehicles.map((vehicle, index) => (
							<div className="container-fluid p-0 mx-2" key={index}>
								<CardMe id= {index} single={vehicle} section="vehicles"/>
							</div>			
					)) : <Loader/>}
				</div>
			</div>
		</div>
	);
};

