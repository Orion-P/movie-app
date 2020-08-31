import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/MovieView.css";

const MovieView = props => {
	const [results, setResults] = useState([]);

	useEffect(() => {
		axios
			.get("https://api.themoviedb.org/3/search/movie", {
				params: {
					api_key: "56a76f413e126fc9841c4c59db456d01",
					query: props.term
				}
			})
			.then(res => {
				setResults(res.data.results);
				console.log(res.data.results);
			})
			.catch(err => {
				console.log(err);
			});
	}, [props.term]);

	return (
		<div className="ui horizontal list">
			<div className="item">
				<div>asdfsadfasdf</div>
			</div>
		</div>
	);
};

export default MovieView;
