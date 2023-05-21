import PropTypes, { object } from "prop-types";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { propTypes } from "react-bootstrap/esm/Image";

const CardCharacter = ({ character }) => {
	const {store, actions} = useContext(Context)
	return (
		<div style={{ width: "16rem" }} className="card text-start d-inline-block mx-2">
			<img className="card-img-top" src="https://unsplash.com/photos/c0VRNWVEjOA/download?force=true" />
			<div className="card-body p-1">
				<h4 className="card-title m-1">{character.name}</h4>
				<div className="p-1">
					<p className="card-text my-0">Gender: {character.gender}</p>
					<p className="card-text my-0">Birthyear: {character.birth_year}</p>
					<p className="card-text my-0">Height: {character.height}</p>
					<p className="card-text my-0">Mass: {character.mass}</p>
				</div>
			</div>
			<div className="card-footer d-flex justify-content-between p-1">
				<button type="button" className="btn btn-outline-primary px-2" onClick={() => {actions.addFav(character.name);}}>
					Learn More!
				</button>
				<button type="button" className="btn btn-outline-warning px-2" onClick={() => {actions.addFav(character.name);}}>
					&hearts;
				</button>
			</div>
		</div>		
	)	
}

export default CardCharacter