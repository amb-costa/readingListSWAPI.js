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
			favs : [],
			demo:[1,2]
		},
		actions: {
			//charFetch: there's issues with id:17
			charFetch : async () => {
				await fetch("https://www.swapi.tech/api/people/")
				.then(response => response.json())
				.then(data => {
					console.log(data),
					setStore({charArray : data.results})
				})
				.catch(error => console.log(error))},

			//planFetch: no issues with any id
			planFetch : async () => {
				await fetch("https://swapi.tech/api/planets/")
				.then(response => response.json())
				.then(data => {
					console.log(data),
					setStore({planArray : data.results})
				})
				.catch(error => console.log(error))},
				
			//vehicFetch: issues with lots of id
			vehicFetch : async () => {
				await fetch("https://swapi.tech/api/vehicles")
				.then(response => response.json())
				.then(data => {
					console.log(data),
					setStore({vehicArray : data.results})
				})
				.catch(error => console.log(error))},

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
