import React from "react";
import "../css/TitleDetails.css";

const TitleDetails = props => {
	console.log(props.title);
	return (
		<div className="title-details">
			<div className="ui header titles">
				<h1 className="title">
					Title: {props.title.title ? props.title.title : props.title.name}
				</h1>
			</div>
			<img
				alt={props.title.overview}
				className="ui image images"
				src={`https://image.tmdb.org/t/p/original${props.title.poster_path}`}
			></img>
			{props.title.release_date ? (
				<p className="release">
					<strong>Release Date:</strong> {props.title.release_date}
				</p>
			) : (
				<p className="release">
					<strong>First Air Date: </strong>
					{props.title.first_air_date}
				</p>
			)}
			<p className="description">
				<strong>Description:</strong> {props.title.overview}
			</p>

			{props.title.backdrop_path ? (
				<img
					alt={props.title.overview}
					className="ui image images backdrop"
					src={`https://image.tmdb.org/t/p/original${props.title.backdrop_path}`}
				></img>
			) : null}
		</div>
	);
};
export default TitleDetails;
