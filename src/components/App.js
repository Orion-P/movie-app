import React from "react";
import Nav from "./Nav";
import SlideShow from "./SlideShow";
import MovieView from "./MovieView";
import MovieSliders from "./MovieSliders";

class App extends React.Component {
	state = { term: "" };

	onFormSubmit = term => {
		this.setState({ term: term });
	};

	render() {
		return (
			<div>
				<Nav onFormSubmit={this.onFormSubmit} />
				<SlideShow />
                <MovieSliders />
			</div>
		);
	}
}

export default App;
