import React from "react";
import "../css/Buttons.css";

const Buttons = props => {
	return (
		<div className="button-box">
			<div className="ui buttons">
				<button
					onClick={() => props.setMoviesOrTv(true)}
					className="ui button movies"
				>
					Movies
				</button>
				<button
					onClick={() => props.setMoviesOrTv(false)}
					className="ui button tv"
				>
					Tv Shows
				</button>
			</div>
		</div>
	);
};

export default Buttons;
