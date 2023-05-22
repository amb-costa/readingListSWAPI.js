import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import {FaTrashAlt} from "react-icons/fa"

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	console.log(store.favs)

	return (
		<nav className="navbar navbar-expand-lg bg-secondary bg-opacity-25 px-0">
  			<div className="container-fluid m-2">
				<a className="navbar-brand" htmlFor="/">
				<img className="object-fit-cover p-0 mx-2" src="https://w7.pngwing.com/pngs/792/718/png-transparent-skellig-michael-chewbacca-star-wars-computer-icons-star-wars-text-logo-desktop-wallpaper.png" style={{ width: "80px", height: "50px" }} />
				</a>
    			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
   				</button>
   				<div className="expand navbar-expand" id="navbarNavDropdown">
      				<ul className="navbar-nav">
        				<li className="nav-item dropdown">
         					<button type="button" className="btn btn-outline-danger dropend nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            					<span className="mx-1">Your Favorites</span>
								<span className="mx-1 bg-secondary bg-opacity-25 p-1">{store.favs.length}</span>
							</button>
          					<ul className="dropdown-menu dropdown-menu-end">
								{store.favs.map((favorite, index) => (
									<li key={index}>
										<a className="dropdown-item">
											<span className="">{favorite}</span>
											<FaTrashAlt className="me-0" onClick={() => {actions.deleteFav(favorite)}}/>
                                	</a></li>
								))}
          					</ul>
       					</li>
      				</ul>
    			</div>
  			</div>
		</nav>









		
	);
};
