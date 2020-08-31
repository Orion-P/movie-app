import React, { useState, useEffect } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import axios from "axios";

import "../css/MovieSliders.css";

const MovieSliders = () => {
	const [nowPlaying, setNowPlaying] = useState([]);
	const [popular, setPopular] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [selectedTitle, setSelectedTitle] = useState({});

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
			<div
				key={item.id}
				onClick={e => {
					if (e.target.parentNode.classList.contains("slider")) {
						setSelectedTitle(item);
						window.location.pathname = "/title";
					}
				}}
				className="slider"
			>
				<img
					alt={item.overview}
					className="ui image images"
					src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
				></img>

				<div className="ui header titles">{item.title}</div>
			</div>
		);
	});

	const nowPopularRendered = popular.map(item => {
		return (
			<div className="slider" key={item.id}>
				<img
					alt={item.overview}
					className="ui image images"
					src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
				></img>

				<div className="ui header titles">{item.title}</div>
			</div>
		);
	});

	const nowTopRatedRendered = topRated.map(item => {
		return (
			<div key={item.id} className="slider">
				<img
					alt={item.overview}
					className="ui image images"
					src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
				></img>

				<div className="ui header titles">{item.title}</div>
			</div>
		);
	});

	return (
		<div className="ui background">
			<label className="headers">
				<strong>Now Playing</strong>
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
