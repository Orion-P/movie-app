import React, { useState, useEffect } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useHistory } from "react-router-dom";

import SingleTitle from "./SingleTitle";
import SlideShow from "./SlideShow";
import TvSliders from "./TvSliders";
import MovieSliders from "./MovieSliders";
import Buttons from "./Buttons";

import "../css/Routes.css";

const Routes = props => {
	const [moviesOrTv, setMoviesOrTv] = useState(true);
	const [locationKeys, setLocationKeys] = useState([]);

	const history = useHistory();

	useEffect(() => {
		if (performance.navigation.type === PerformanceNavigation.TYPE_RELOAD) {
			window.location.pathname = "/";
		}

		return history.listen(location => {
			if (history.action === "PUSH") {
				setLocationKeys([location.key]);
			}

			if (history.action === "POP") {
				if (locationKeys[1] === location.key) {
					setLocationKeys(([_, ...keys]) => keys);

					// Handle forward event
				} else {
					setLocationKeys(keys => [location.key, ...keys]);

					// Handle back event
				}
			}
		});
	}, [locationKeys, history]);

	const renderedSearchResults = props.searchResults.map(result => {
		if (result.poster_path === null) {
			return null;
		}

		return (
			<div>
				<img
					alt={result.overview}
					className="ui image images"
					src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
				></img>

				<div className="ui header titles">
					{result.title ? result.title : result.name}
				</div>
			</div>
		);
	});

	useEffect(() => {
		console.log(props.searchResults);
	}, [props.searchResults]);

	if (window.location.pathname === "/") {
		return (
			<div>
				<SlideShow />
				<Buttons setMoviesOrTv={setMoviesOrTv}></Buttons>
				{moviesOrTv === true ? <MovieSliders /> : <TvSliders />}
			</div>
		);
	}
	//TODO create single item page

	if (window.location.pathname === "/title") {
		return (
			<div>
				<SingleTitle />
			</div>
		);
	}

	if (window.location.pathname === `/search`) {
		return (
			<div
				style={{
					marginTop: "64px",
					backgroundColor: "rgba(16, 16, 105, 0.342)",
					background: "linear-gradient(to bottom, #6b837e, #e7f84f4d)"
				}}
			>
				{props.searchResults.length === 0 ? (
					<h1
						style={{
							textAlign: "center",
							paddingTop: "100px",
							paddingBottom: "100px"
						}}
						className="ui container"
					>
						We couldn't find anything for that search term. Please try again.
					</h1>
				) : (
					<div>
						<h1
							style={{
								textAlign: "center",
								paddingTop: "50px",
                                fontSize: "35px",
                                fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
                                Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`
							}}
						>
							Search Results For:<br></br>
							{props.searchResults[0].name ? "TV Shows" : "Movies"}
						</h1>
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
							{renderedSearchResults}
						</Carousel>
					</div>
				)}
			</div>
		);
	}

	return null;
};

export default Routes;
