import React, { useState, useEffect } from "react";
import SlideShow from "./SlideShow";
import TvSliders from "./TvSliders";
import MovieSliders from "./MovieSliders";
import Buttons from "./Buttons";
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Routes = props => {
	const [moviesOrTv, setMoviesOrTv] = useState(true);

	const renderedSearchResults = props.searchResults.map(result => {
		return (
			<div>
				<img
					className="ui image images"
					src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
				></img>

				<div className="ui header titles">{result.title}</div>
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

	if (window.location.pathname === `/search`) {
		return (
			<div style={{ marginTop: "64px" }}>
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
		);
	}

	return null;
};

export default Routes;
