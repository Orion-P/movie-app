import React from "react";
import SearchBar from "./SearchBar";
import "../css/Nav.css";

class Nav extends React.Component {
	onClick = () => {
		window.location.pathname = "/";
	}

	render() {
		return (
			<div style={{ backgroundColor: "#1a0000" }} class="ui fixed text menu">
				<div style={{ paddingLeft: "15px" }} className="item">
					<i onClick={this.onClick} href="/" className="icon link home big"></i>
				</div>

				<div className="center item">
					<SearchBar
						onFormSubmit={this.props.onFormSubmit}
						className="search"
					/>
				</div>

				<div id="fixmargin" className="right floated item">
					<i href="/" className="icon link info circle big"></i>
				</div>
			</div>
		);
	}
}

export default Nav;
