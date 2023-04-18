import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function ReadMore(props) {
	ReadMore.propTypes = {
		name: PropTypes.string,
		index: PropTypes.number,
		item: PropTypes.string,
		link: PropTypes.string
	};

	return (
		<div>
			<Link to={"/" + props.link + "/" + props.name}>
				<button className="btn btn-outline-primary">"Learn more!"</button>
			</Link>
		</div>
	);
}







/* return (
		<div>
			<Link to={"/" + props.link + "/" + encodedName}>
				<button className="btn btn-outline-primary">{BUTTON_LABEL}</button>
			</Link>
		</div>
	);*/