import React, { useState } from "react";
import Nav from "./Nav";

import Footer from "./Footer";
import axios from "axios";
import Routes from "./Routes";

const App = () => {
	const [term, setTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const onFormSubmit = (term, e) => {
		axios
			.get("https://api.themoviedb.org/3/search/movie", {
				params: {
					api_key: "56a76f413e126fc9841c4c59db456d01",
					query: term
				}
			})
			.then(res => {
				setSearchResults(res.data.results);
				window.history.pushState({ page_id: "search" }, "", "/search");
			})
			.catch(err => {
				console.log(err);
			});

		setTerm(term);
	};

	return (
		<div>
			<Nav onFormSubmit={onFormSubmit} />
			<Routes searchResults={searchResults}></Routes>
			<Footer></Footer>
		</div>
	);
};

export default App;
