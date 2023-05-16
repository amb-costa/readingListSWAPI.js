import React, { useContext, useEffect } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import CardCharacter from "../component/cardCharacter.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className=" text-center mt-5 mb-5">
				<h1 className="text-center">Characters</h1>

				{store.characters.map((char, index) => (
					<CardCharacter key={index} id={index} character={char} />))
				}

				<h1 className="text-center">Planets</h1>
			</div>
		</div>
	);
};