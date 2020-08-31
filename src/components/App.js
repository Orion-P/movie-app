import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import Nav from "./Nav";
import Routes from "./Routes";
import Footer from "./Footer";

const App = () => {
    
	const [term, setTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    

	const onFormSubmit = (term, category, index) => {
		axios
			.get(`https://api.themoviedb.org/3${category}`, {
				params: {
					api_key: "56a76f413e126fc9841c4c59db456d01",
					query: term
				}
			})
			.then(res => {
				setSearchResults(res.data.results);
			})
			.catch(err => {
				console.log(err);
			});

		setTerm(term);
		window.history.pushState({ page_id: "search" }, "", "/search");
	};

	return (
		<Router>
			<div>
				<Nav onFormSubmit={onFormSubmit} />
				<Routes searchResults={searchResults}></Routes>
				<Footer></Footer>
			</div>
		</Router>
	);
};

export default App;
