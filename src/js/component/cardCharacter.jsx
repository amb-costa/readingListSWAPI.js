import { Card, Button } from "react-bootstrap";
import PropTypes, { object } from "prop-types";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { propTypes } from "react-bootstrap/esm/Image";

const CardCharacter = ({ character }) => {
	const { store, actions } = useContext(Context);
	
	
	return (
		
		<Card style={{ width: "16rem" }} className="col-4 text-center mb-4 mt-4 mr-1 d-inline-block ">
			<Card.Img variant="top" src="https://unsplash.com/photos/c0VRNWVEjOA/download?force=true" />
			<Card.Body>
				<Card.Title>{character.name}</Card.Title>
				<Card.Text>height: {character.height}</Card.Text>
				<Card.Text>hair color: {character.hair_color}</Card.Text>
				<Card.Text>skin color: {character.skin_color}</Card.Text>
				<Card.Text>gender: {character.gender}</Card.Text>
				<Card.Text>birthday: {character.birth_year}</Card.Text>

				<Button
					variant="primary"
					onClick={() => {
						actions.addFav(character.name);
					}}>
					Add to favourites
				</Button>
				<Button
					variant="primary"
					className="mt-2">
					More Info!
				</Button>
			</Card.Body>
		</Card>
	);
}

export default CardCharacter