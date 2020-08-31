import React, { useState, useEffect } from "react";
import "../css/TvSliders.css";

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
			.get("https://api.themoviedb.org/3/tv/airing_today", {
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
			.get("https://api.themoviedb.org/3/tv/popular", {
				params: {
					api_key: "56a76f413e126fc9841c4c59db456d01"
				}
			})
			.then(res => {
				console.log(res.data.results);
				setPopular(res.data.results);
			})
			.catch(err => {
				console.log(err);
			});

		//top rated
		axios
			.get("https://api.themoviedb.org/3/tv/top_rated", {
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

				<div className="ui header titles">{item.name}</div>
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

				<div className="ui header titles">{item.name}</div>
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

				<div className="ui header titles">{item.name}</div>
			</div>
		);
	});

	return (
		<div className="ui background">
			<label className="headers">
				<strong>Airing Today</strong>
			</label>
			<Carousel
				clickToChange
				className="caro"
				arrows
				infinite
				centered
				breakpoints={{
					375: {
						slidesPerPage: 1
					},
					500: {
						slidesPerPage: 1
					},
					750: {
						slidesPerPage: 3
					},
					1000: {
						slidesPerPage: 3
					},
					1250: {
						slidesPerPage: 5
					},
					1500: {
						slidesPerPage: 5
					},
					1920: {
						slidesPerPage: 5
					}
				}}
			>
				{nowPlayingRendered}
			</Carousel>

			<label className="headers">
				<strong>Top Rated</strong>
			</label>

			<Carousel
				clickToChange
				breakpoints={{
					375: {
						slidesPerPage: 1
					},
					500: {
						slidesPerPage: 1
					},
					750: {
						slidesPerPage: 3
					},
					1000: {
						slidesPerPage: 3
					},
					1250: {
						slidesPerPage: 5
					},
					1500: {
						slidesPerPage: 5
					},
					1920: {
						slidesPerPage: 5
					}
				}}
				className="caro"
				arrows
				infinite
				centered
			>
				{nowTopRatedRendered}
			</Carousel>

			<label className="headers">
				<strong>Popular</strong>
			</label>

			<Carousel
				clickToChange
				breakpoints={{
					375: {
						slidesPerPage: 1
					},
					500: {
						slidesPerPage: 1
					},
					750: {
						slidesPerPage: 3
					},
					1000: {
						slidesPerPage: 3
					},
					1250: {
						slidesPerPage: 5
					},
					1500: {
						slidesPerPage: 5
					},
					1920: {
						slidesPerPage: 5
					}
				}}
				className="caro caro-bottom"
				arrows
				infinite
				centered
			>
				{nowPopularRendered}
			</Carousel>
		</div>
	);
};
export default MovieSliders;
