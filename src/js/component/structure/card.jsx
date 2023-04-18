import React from "react";
import propTypes from "prop-types";
import ReadMore from "./btn-readmore.jsx";

const Card = props => {
    Card.propTypes = {
		index: propTypes.number,
		name: propTypes.string,
		details: propTypes.array,
		link: propTypes.string
	};

    const cardStructure = props.details.map((detail, index) => {
		return (
			<li className="list-unstyled" key={index}>
				{detail}
			</li>
		);
	});

    return (
		<div className="col-3">
			<div className="card card-block">
				<img src="" className="card-img-top" alt="star wars image" />
				<div className="card-body d-flex flex-column">
					<h5 className="card-title">{props.name}</h5>
					{cardStructure}
					<div className="mt-auto">
						<div className="mt-3 d-flex justify-content-between ">
							<ReadMore name={props.name} index={props.index} link={props.link}/>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);


}


/*import React from "react";
import PropTypes from "prop-types";
import { ButtonSeeDetail } from "../button-see-detail";
import { ButtonToggleFavorite } from "../button-toggle-favorite";
import starWars400x200 from "../../../img/star-wars-400x200.jpg";
import "../../../styles/index.scss";

export const Card = props => {

    <ButtonSeeDetail index={props.index} name={props.name} link={props.link} />
	<ButtonToggleFavorite itemName={props.name} />

};*/