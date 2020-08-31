import React, { useState } from "react";
import SlideShow from "./SlideShow";
import TvSliders from "./TvSliders";
import MovieSliders from "./MovieSliders";
import Buttons from "./Buttons";

const Routes = () => {
    const [moviesOrTv, setMoviesOrTv] = useState(true);

	if (window.location.pathname === "/") {
		return (
			<div>
				<SlideShow />
				<Buttons setMoviesOrTv={setMoviesOrTv}></Buttons>
				{moviesOrTv === true ? <MovieSliders /> : <TvSliders />}
			</div>
		);
	}
};

export default Routes;
