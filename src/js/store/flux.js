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
			//charactersFetch: will fetch the first 10 characters from page one
			//results in characters array : object with character properties inside
			charactersFetch : async () => {
				let auxiliary = [];
				for (let i = 1; i <= 10; i++) {
					await fetch("https://www.swapi.tech/api/people/"+`${i}`)
					.then(response => response.json())
					.then(data => {
						auxiliary.push(data.result.properties)
						if (auxiliary.length==10) {
							setStore({ characters : auxiliary })
							setStore({ readyCharacters : true })
						}})
				}},
			
			//planetsFetch: will fetch the first 10 characters from page one
			//results in planet array : object with planet properties inside
			planetsFetch : async () => {
				let auxiliary = [];
				for (let i = 1; i <= 10; i++) {
					await fetch("https://www.swapi.tech/api/planets/"+`${i}`)
					.then(response => response.json())
					.then(data => {
						auxiliary.push(data.result.properties)
						if (auxiliary.length==10) {
							setStore({ planets : auxiliary })
							setStore({ readyPlanets : true })
						}})
				}},
			
			//vehiclesFetch: tricky one since the uid aren't sorted
			//will create an array with the 10 first uid
			//then iterating to fetch like normal
			vehiclesFetch : async () => {
				let auxiliary = [];
				let uid = [4,7,6,8,14,18,16,19,20,24]
				for (let i of uid) {
					await fetch("https://www.swapi.tech/api/vehicles/"+`${i}`)
					.then(response => response.json())
					.then(data => {
						auxiliary.push(data.result.properties)
						if (auxiliary.length==10) {
							setStore({ vehicles : auxiliary })
							setStore({ readyVehicles : true })
						}})				
		}},

			isFav : name => {
				return getStore().favs.includes(name)
				},

			addFav : name => {
				console.log(getStore().favs)
				setStore({ favs : [...getStore().favs, name] });
				},

			deleteFav : name => {
				const auxRry = getStore().favs.filter((el) => el != name);
				setStore({ favs : auxRry })
			}
		}
	}	
}


export default getState;
