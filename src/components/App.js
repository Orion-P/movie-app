import React, { useState } from "react";
import Nav from "./Nav";
import SlideShow from "./SlideShow";
import TvSliders from "./TvSliders";
import MovieSliders from "./MovieSliders";
import Buttons from "./Buttons";
import Footer from './Footer';

const App = () => {
	const [term, setTerm] = useState("");
	const [moviesOrTv, setMoviesOrTv] = useState(true);

	const onFormSubmit = term => {
		setTerm(term);
	};

	return (
		<div>
			<Nav onFormSubmit={onFormSubmit} />
			<SlideShow />
			<Buttons setMoviesOrTv={setMoviesOrTv}></Buttons>
            {moviesOrTv === true ? <MovieSliders /> : <TvSliders />}
            <Footer></Footer>
		</div>
	);
};

export default App;
