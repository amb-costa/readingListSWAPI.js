import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const ChoiceView = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [ choice, setChoice ] = useState("");
	useEffect(() => {
		if (params.section == "character") {
			setChoice(store.people[params.id]);
		} else if (params.section == "vehicles") {
            setChoice(store.vehicles[params.id])
        }
            else if (params.section=="planets") {
			setChoice(store.planets[params.id]);
		}
	}, []);
	if (params.section == "character") {
		return (
			<div className="jumbotron">
				<h1 className="display-4">{choice.name}</h1>
				<p className="lead">
					Lucas ipsum dolor sit amet chagrian gank roos rotta thul evazan quarren dantooine skywalker mygeeto.
					Padmé cato gavyn kathol bajic aramandi. Togruta unu darth aramandi jerec evocii. Dash nass
					thisspiasian zuggs cordé snootles tapani md-5 massassi. Braxant vel askajian yuzzum lama paaerduag
					rebo. Himoran omwati tatooine moff dash anx. Obi-wan coruscant sluis wampa. Hapan palpatine nas
					ranat snivvian ooryl frozian bimm dexter. Wol breha frozian darth tarpals mygeeto darklighter jubnuk
					arkanian. Vor derlin glymphid droid.
				</p>
				<hr className="my-4" />
				<p>Height: {choice.height}</p>
				<p>Hair Color: {choice.hair_color}</p>
				<p>Skin Color: {choice.skin_color}</p>
				<p>Gender: {choice.gender}</p>
				<p>Birthday: {choice.birth_year}</p>
			</div>
		);
	} else {
		return (
			<div className="jumbotron">
				<h1 className="display-4">{choice.name}</h1>
				<p className="lead">
					Lucas ipsum dolor sit amet chagrian gank roos rotta thul evazan quarren dantooine skywalker mygeeto.
					Padmé cato gavyn kathol bajic aramandi. Togruta unu darth aramandi jerec evocii. Dash nass
					thisspiasian zuggs cordé snootles tapani md-5 massassi. Braxant vel askajian yuzzum lama paaerduag
					rebo. Himoran omwati tatooine moff dash anx. Obi-wan coruscant sluis wampa. Hapan palpatine nas
					ranat snivvian ooryl frozian bimm dexter. Wol breha frozian darth tarpals mygeeto darklighter jubnuk
					arkanian. Vor derlin glymphid droid.
				</p>
				<hr className="my-4" />
				<p>Climate: {choice.climate}</p>
				<p>Gravity: {choice.gravity}</p>
				<p>Terrain: {choice.terrain}</p>
				<p>Population: {choice.population}</p>
			</div>
		);
	}
};

ChoiceView.propTypes = {
	// You can declare that a prop is a specific JS type. By default, these
	// are all optional.
	props: PropTypes.object,
	name: PropTypes.object
};
