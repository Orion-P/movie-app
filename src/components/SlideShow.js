import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import "../css/Slideshow.css";

const SlideShow = props => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios
			.get("https://api.themoviedb.org/3/movie/upcoming", {
				params: {
					api_key: "56a76f413e126fc9841c4c59db456d01"
				}
			})
			.then(res => {
				setMovies(res.data.results);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const renderedMovies = movies.map(movie => {
		return (
			<div
				className="overlay"
				key={movie.id}
				style={{ width: "100%", backgroundColor: "black" }}
			>
				<Link
					onClick={e => {
						props.setTitle(movie);
					}}
					to={"/title-details"}
				>
					<h1 className="title text">
						{movie.original_title ? movie.original_title : null}
					</h1>

					<h2 className="date">
						{movie.release_date.slice(5) + "-" + movie.release_date.slice(0, 4)}
					</h2>
					<h2 className="overview">
						{movie.overview.length < 100
							? movie.overview
							: movie.overview.slice(0, 100) + "..."}
					</h2>
				</Link>
				<div className="overlay">
					<img
						alt={movie.overview}
						src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
						className="image"
					></img>
				</div>
			</div>
		);
	});

	return (
		<div className="root">
			<Carousel infinite autoPlay={3000} animationSpeed={800}>
				{renderedMovies}
			</Carousel>
		</div>
	);
};

export default SlideShow;

// <button className="ui button left-button">
// 				<i
// 					style={{ position: "absolute", left: "30%", top: "20%" }}
// 					className="icon left black arrow big"
// 				></i>
// 			</button>
// <button className="ui button right-button">
// 				<i
// 					style={{ position: "absolute", right: "24%", top: "20%" }}
// 					className="icon right black arrow big"
// 				></i>
// 			</button>
