//store: arrays where characters, planets, vehicles and their data are stored
//includes array for favorite items
//actions:
//for simplicity's sake, will limit each array to 30 items, since there's issues with missing id's on the API

//id's were checked entering the corresponding fetch URL
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charArray :[],
			planArray : [],
			vehicArray : [],
			favs : []
		},
		actions: {
			//charFetch: there's issues with id:17
			charFetch : async () => {
				let auxRry = [];
				for (let i=0; i<31; i++) {
					if (i!=17) {
						const respChar = await fetch(`https://www.swapi.tech/api/people/${i}`);
            			const jsonChar = await respChar.json();
            			let auxObj = {
                			"height": jsonChar.result.properties.height,
                			"mass": jsonChar.result.properties.mass,
                			"hair_color": jsonChar.result.properties.hair_color,
                			"skin_color": jsonChar.result.properties.skin_color,
                			"eye_color": jsonChar.result.properties.eye_color,
               				"birth_year": jsonChar.result.properties.birth_year,
                			"gender": jsonChar.result.properties.gender,
                			"name": jsonChar.result.properties.name,
                			"homeworld": jsonChar.result.properties.homeworld,
                			"description": jsonChar.result.description,
							"link": `/people/${i}`
            			};
            			console.log(auxObj)
            			auxRry.push(newObj);
					}
				}
				setStore({charArray: auxRry});
			},

			//planFetch: no issues with any id
			planFetch : async () => {
				let auxRry = [];
				for (let i = 0; i < 30; i++) {
						const respPlan = await fetch(`https://www.swapi.tech/api/planets/${i}`);
            			const jsonPlan = await respPlan.json();
            			let auxObj = {
                			"height": jsonPlan.result.properties.height,
                			"mass": jsonPlan.result.properties.mass,
                			"hair_color": jsonPlan.result.properties.hair_color,
                			"skin_color": jsonPlan.result.properties.skin_color,
                			"eye_color": jsonPlan.result.properties.eye_color,
               				"birth_year": jsonPlan.result.properties.birth_year,
                			"gender": jsonPlan.result.properties.gender,
                			"name": jsonPlan.result.properties.name,
                			"homeworld": jsonPlan.result.properties.homeworld,
                			"description": jsonPlan.result.description,
							"link": `/planets/${i}`
            			};
            			console.log(auxObj)
            			auxRry.push(newObj);
				}
				setStore({planArray:auxRry});
			},

			//vehicFetch: issues with lots of id
			//will create an auxiliary array containing all the working id, sorting their elements
			//will iterate on said array to fetch vehicles
			vehicFetch : async () => {
				let auxRry = [];
				let auxId = [4,7,6,8,14,18,16,19,20,24,25,30,26,33,34,35,36,37,38,42,44,45,46,50,51,53,54,55,56];
				auxId.sort();
				for (i in auxId) {
					const respVehic = await fetch(`https://www.swapi.tech/api/vehicles/${i}`);
					const jsonVehic = await respVehic.json();
					let auxObj = {
						"model": jsonVehic.result.properties.model,
						"vehicle_class": jsonVehic.result.properties.vehicle_class,
						"manufacturer": jsonVehic.result.properties.manufacturer,
						"cost_in_credits": jsonVehic.result.properties.cost_in_credits,
						"length": jsonVehic.result.properties.length,
						"crew": jsonVehic.result.properties.crew,
						"passengers": jsonVehic.result.properties.passengers,
						"max_atmosphering_speed": jsonVehic.result.properties.max_atmosphering_speed,
						"cargo_capacity": jsonVehic.result.properties.cargo_capacity,
						"consumables": jsonVehic.result.properties.consumables,
						"name": jsonVehic.result.properties.name,
						"description": jsonVehic.description,
						"link": `/vehicles/${i}`
					};
					console.log(auxObj)
					auxRry.push(auxObj);
				}
				setStore({vehicFetch: auxRry})
			},

			isFav : name => {
				let store = getStore();
				return store.favs.includes(name)
			},

			addFav : name => {
				setStore({favs : [...getStore().favs, name]});
			},

			deleteFav : name => {
				let store = getStore();
				const auxRry = store.favs.filter((el) => el != name);
				setStore({favs : auxRry})
			}
		}
	};
};

export default getState;
