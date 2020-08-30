import React, { useState, useEffect } from "react";
import "../css/MovieSliders.css";

import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import axios from "axios";

const MovieSliders = () => {
	const [nowPlaying, setNowPlaying] = useState([]);
	const [popular, setPopular] = useState([]);
	const [topRated, setTopRated] = useState([]);

	useEffect(() => {
		//now playing
		axios
			.get("https://api.themoviedb.org/3/movie/now_playing", {
				params: {
					api_key: "56a76f413e126fc9841c4c59db456d01"
				}
			})
			.then(res => {
				setNowPlaying(res.data.results);
			})
			.catch(err => {
				console.log(err);
			});

		//popular
		axios
			.get("https://api.themoviedb.org/3/movie/popular", {
				params: {
					api_key: "56a76f413e126fc9841c4c59db456d01"
				}
			})
			.then(res => {
				setPopular(res.data.results);
			})
			.catch(err => {
				console.log(err);
			});

		//top rated
		axios
			.get("https://api.themoviedb.org/3/movie/top_rated", {
				params: {
					api_key: "56a76f413e126fc9841c4c59db456d01"
				}
			})
			.then(res => {
				setTopRated(res.data.results);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const nowPlayingRendered = nowPlaying.map(item => {
		return (
			<div className="slider">
				<img
					className="ui image images"
					src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
				></img>

				<div className="ui header titles">{item.original_title}</div>
			</div>
		);
	});

	const nowPopularRendered = popular.map(item => {
		return (
			<div className="slider">
				<img
					className="ui image images"
					src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
				></img>

				<div className="ui header titles">{item.original_title}</div>
			</div>
		);
	});

	const nowTopRatedRendered = topRated.map(item => {
		return (
			<div className="slider">
				<img
					className="ui image images"
					src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
				></img>

				<div className="ui header titles">{item.original_title}</div>
			</div>
		);
	});

	return (
		<div className="ui background">
			<div className="ui buttons">
				<button className="ui button movies">Movies</button>
				<button className="ui button tv">Tv Shows</button>
			</div>
			<label className="headers">
				<strong>Now Playing</strong>
			</label>
			<Carousel className="caro" arrows infinite centered>
				{nowPlayingRendered}
            </Carousel>
            
			<label className="headers">
				<strong>Top Rated</strong>
			</label>

			<Carousel className="caro" arrows infinite centered>
				{nowTopRatedRendered}
            </Carousel>
            
			<label className="headers">
				<strong>Popular</strong>
			</label>

			<Carousel className="caro" arrows infinite centered>
				{nowPopularRendered}
			</Carousel>
		</div>
	);
};
export default MovieSliders;
