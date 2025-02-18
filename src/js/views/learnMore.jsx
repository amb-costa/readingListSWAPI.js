import { useParams } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const LearnMore = () => {
	const params = useParams();
	const [ choice, setChoice ] = useState("");
	
	useEffect(() => {
		params.section == "characters" && setChoice(store.characters[params.id])
		params.section == "vehicles" && setChoice(store.vehicles[params.id])
		params.section == "planets" && setChoice(store.planets[params.id])
	}, []);

	const CharacterScroll = ({ character }) => {
		return(
			<div className="row mx-0 mt-4 py-1 px-2 justify-content-center">
				<div className="col b-inline-block mx-2 text-center">
					<h5>Birthyear:</h5>
					<hr/>
					<h6>{character.birth_year}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Gender:</h5>
					<hr/>
					<h6>{character.gender}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Height:</h5>
					<hr/>
					<h6>{character.height}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Mass:</h5>
					<hr/>
					<h6>{character.mass}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Skin Color:</h5>
					<hr/>
					<h6>{character.skin_color}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Hair Color:</h5>
					<hr/>
					<h6>{character.hair_color}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Eye Color:</h5>
					<hr/>
					<h6>{character.eye_color}</h6>
				</div>
			</div>
		)
	}

	const PlanetScroll = ({ planet }) => {
		return(
			<div className="row mx-0 mt-4 py-1 px-2 justify-content-center">
				<div className="col b-inline-block mx-2 text-center">
					<h5>Population:</h5>
					<hr/>
					<h6>{planet.population}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Climate:</h5>
					<hr/>
					<h6>{planet.climate}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Terrain:</h5>
					<hr/>
					<h6>{planet.terrain}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Diameter:</h5>
					<hr/>
					<h6>{planet.diameter}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Rotation Period:</h5>
					<hr/>
					<h6>{planet.rotation_period}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Orbital Period:</h5>
					<hr/>
					<h6>{planet.orbital_period}</h6>
				</div>
			</div>
		)
	}

	const VehicleScroll = ({ vehicle }) => {
		return(
			<div className="row mx-0 mt-4 py-1 px-2 justify-content-center">
				<div className="col b-inline-block mx-2 text-center">
					<h5>Model:</h5>
					<hr/>
					<h6>{vehicle.model}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Manufacturer:</h5>
					<hr/>
					<h6>{vehicle.manufacturer}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Crew:</h5>
					<hr/>
					<h6>{vehicle.crew}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Passengers:</h5>
					<hr/>
					<h6>{vehicle.passengers}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Max Atmospheric Speed:</h5>
					<hr/>
					<h6>{vehicle.max_atmosphering_speed}</h6>
				</div>
				<div className="col b-inline-block mx-2 text-center">
					<h5>Cost in Credits:</h5>
					<hr/>
					<h6>{vehicle.cost_in_credits}</h6>
				</div>
			</div>
		)
	}

	return (
		<div className="container-fluid m-0 p-2">
			<div className="row mx-0 my-2 p-1">
				<h1 className="col-12 my-1 px-4 text-start text-danger">{choice.name}</h1>
			</div>
			<div className="row mx-0 my-3 p-2 justify-content-center">
				<div className="col-5 mx-2">photohere</div>
				<div className="col-5 mx-2">
					<p>Lucas ipsum dolor sit amet chagrian gank roos rotta thul evazan quarren dantooine skywalker mygeeto.
					Padmé cato gavyn kathol bajic aramandi. Togruta unu darth aramandi jerec evocii. Dash nass
					thisspiasian zuggs cordé snootles tapani md-5 massassi. Braxant vel askajian yuzzum lama paaerduag
					rebo. Himoran omwati tatooine moff dash anx. Obi-wan coruscant sluis wampa. Hapan palpatine nas
					ranat snivvian ooryl frozian bimm dexter. Wol breha frozian darth tarpals mygeeto darklighter jubnuk
					arkanian. Vor derlin glymphid droid.</p>
				</div>
			</div>
			{params.section == "characters" && <CharacterScroll character={choice}/>}
			{params.section == "planets" && <PlanetScroll planet={choice}/>}
			{params.section == "vehicles" && <VehicleScroll vehicle={choice}/>}
		</div>
	)
}