import React, { useState } from "react";
import Nav from "./Nav";
import SlideShow from "./SlideShow";
import TvSliders from "./TvSliders";
import MovieSliders from "./MovieSliders";
import Buttons from "./Buttons";
import Footer from "./Footer";
import axios from "axios";
import Routes from './Routes';

const App = () => {
	const [term, setTerm] = useState("");
	const [moviesOrTv, setMoviesOrTv] = useState(true);

	const onFormSubmit = term => {
		axios
			.get("https://api.themoviedb.org/3/search/movie", {
				params: {
					api_key: "56a76f413e126fc9841c4c59db456d01",
					query: term
				}
			})
			.then(res => {
				console.log(res.data.results);
			})
			.catch(err => {
				console.log(err);
			});

		setTerm(term);
	};

	return (
		<div>
			<Nav onFormSubmit={onFormSubmit} />
			<Routes></Routes>
            <Footer></Footer>
		</div>
	);
};

export default App;
