import React from "react";

import "../css/SearchBar.css";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = e => {
		e.preventDefault();

		this.props.onFormSubmit(this.state.term);
		//TODO: Make sure we call callback from parent component
	};

	onInputChange = e => {
		this.setState({ term: e.target.value });
	};

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="ui form fixpadding">
				<div className="field ui icon input">
					<i className="search icon"></i>
					<input
						className="search"
						name="search"
						type="text"
						placeholder="Movie Search"
						value={this.state.term}
						onChange={this.onInputChange}
					></input>
				</div>
			</form>
		);
	}
}

export default SearchBar;
