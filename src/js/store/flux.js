import { useState, useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favs: [],
			readyCharacters: false,
			readyPlanets: false,
			readyVehicles: false
		},

		actions: {
			//charactersFetch: first, will fetch an array with an object per character: uid, name, url
			//then, will pick each url and fetch again
			//results in characters array : object with character properties inside
			charactersFetch : async () => {
				await fetch("https://www.swapi.tech/api/people/")
				.then(response => response.json())
				.then(data => {
					const auxiliary = [];
					{data.results.map((object) => {
						fetch(`${object.url}`)
						.then(response => response.json())
						.then(data => {auxiliary.push(data.result.properties)})
					})}
					setStore({ characters :  auxiliary })
					setStore({ readyCharacters : true })})
				},
			
			//planetsFetch: first, will fetch an array with an object per planet: uid, name, url
			//then, will pick each url and fetch again
			//results in planet array : object with planet properties inside
			planetsFetch : () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(response => response.json())
				.then(data => {
					let auxiliary = [];
					{data.results.map((object) => {
						fetch(`${object.url}`)
						.then(response => response.json())
						.then(data => auxiliary.push(data.result.properties))
					})}
					setStore({ planets :  auxiliary })
					setStore({ readyPlanets : true })})
				},
			
			//vehiclesFetch: first, will fetch an array with an object per vehicle: uid, name, url
			//then, will pick each url and fetch again
			//results in vehicles array : object with vehicle properties inside
			vehiclesFetch : async () => {
				await fetch("https://www.swapi.tech/api/vehicles/")
				.then(response => response.json())
				.then(data => {
					let auxiliary = [];
					{data.results.map((object) => {
						fetch(`${object.url}`)
						.then(response => response.json())
						.then(data => auxiliary.push(data.result.properties))
					})} 
					setStore({ vehicles : auxiliary })
					setStore({ readyVehicles : true })})				
				},

			isFav : name => {
				return getStore().favs.includes(name)
				},

			addFav : name => {
				setStore({ favs : [...getStore().favs, name] });
				},

			deleteFav : name => {
				const auxRry = getStore().favs.filter((el) => el != name);
				setStore({ favs : auxRry })
			}
		}
	}
	};


export default getState;
