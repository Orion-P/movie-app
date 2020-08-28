import React from "react";
import Nav from "./Nav";
import SlideShow from "./SlideShow";

class App extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<SlideShow />
			</div>
		);
	}
}

export default App;
