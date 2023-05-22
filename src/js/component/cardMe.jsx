import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

//CardMe: card generator for characters, planets, vehicles (sections)
//receives an object with the single data, id, section of said single 
//returns a card structure + read more button + like button
const CardMe = ({single, id, section}) => {
	const {store, actions} = useContext(Context)
    const navigate = useNavigate()

    const Body4Characters = ({character}) => {
        return (
            <div className="p-1">
					<p className="card-text my-0">Gender: {character.gender}</p>
					<p className="card-text my-0">Birthyear: {character.birth_year}</p>
					<p className="card-text my-0">Height: {character.height}</p>
					<p className="card-text my-0">Mass: {character.mass}</p>
			</div>
        )
    }

    const Body4Planets = ({planet}) => {
        return (
            <div className="p-1">
					<p className="card-text my-0">Planet Population: {planet.population}</p>
					<p className="card-text my-0">Climate: {planet.climate}</p>
					<p className="card-text my-0">Terrain: {planet.terrain}</p>
				</div>
        )
    }

    const Body4Vehicles = ({vehicle}) => {
        return (
            <div className="p-1">
					<p className="card-text my-0">Model: {vehicle.model}</p>
					<p className="card-text my-0">Manufacturer: {vehicle.manufacturer}</p>
					<p className="card-text my-0">Cost in Credits: {vehicle.cost_in_credits}</p>
				</div>
        )
    }

	const FavHandler = (name) => {
		if (!actions.isFav(name)) {
			return (actions.addFav(name))
		} else {
			return (actions.deleteFav(name))
		}
	}

	return (
		<div style={{ width: "18rem", height: "23rem" }} className="card text-start d-inline-block p-0">
			<img className="card-img-top" style={{ width: "18rem", height: "10rem" }}src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" />
			<div className="card-body p-1" style={{ height: "10rem"}}>
				<h4 className="card-title m-1">{single.name}</h4>
                {(section=="characters") ? <Body4Characters character={single} /> : 
                    ((section=="planets") ? <Body4Planets planet={single} /> : <Body4Vehicles vehicle={single} />)}
			</div>
			<div className="card-footer d-flex justify-content-between p-1" style={{ height: "3rem"}}>
				<button type="button" className="btn btn-outline-primary px-2 py-1" onClick={() => {navigate("/" + section + "/" + id)}}>
					Learn More!
				</button>
				<button type="button" className="btn btn-outline-warning px-3 py-1" onClick={()=>FavHandler(single.name)}>
					&hearts;
				</button>
			</div>
		</div>		
	)	
}

export default CardMe