const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favs: []
		},
		actions: {
			getCharacters: async () => {
				await fetch("https://swapi.dev/api/people/")
				.then(response => response.json())
				.then(data => setStore({ characters: data.results }));
				},
		
			getPlanets: async () => {
				await fetch("https://swapi.dev/api/planets/")
				.then(response => response.json())
				.then(data => setStore({ planets: data.results }));
				},

			getVehicles: async () => {
				await fetch("https://swapi.dev/api/vehicles/")
				.then(response => response.json())
				.then(data => setStore({ vehicles: data.results}))
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
