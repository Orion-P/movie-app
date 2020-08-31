import React from "react";

import "../css/SearchBar.css";

class SearchBar extends React.Component {
	state = { term: "", activeDropdown: false, search: "/search/movie" };

	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}

	componentDidMount() {
		document.querySelector("body").addEventListener("click", e => {
			if (this.ref.current.contains(e.target)) {
				this.setState({ term: "" });
				return;
			}
			this.setState({ activeDropdown: false });
			this.setState({ term: "" });
		});
	}

	onFormSubmit = e => {
		e.preventDefault();

		this.props.onFormSubmit(this.state.term, this.state.search);
		//TODO: Make sure we call callback from parent component
	};

	onInputChange = e => {
		this.setState({ term: e.target.value });
	};

	render() {
		return (
			<form
				ref={this.ref}
				onSubmit={this.onFormSubmit}
				className="ui form fixpadding"
			>
				<div className="field ui icon input">
					<i
						onClick={() => {
							if (this.state.activeDropdown === true) {
								return this.setState({ activeDropdown: false });
							}
							return this.setState({
								activeDropdown: !this.state.activeDropdown
							});
						}}
						style={{ marginRight: "1px" }}
						className="black angle down icon link"
					>
						<div
							className={`ui simple ${
								this.state.activeDropdown === true ? "active" : ""
							} dropdown`}
						>
							<div className="menu">
								<div
									onClick={() => {
										this.setState({ search: "/search/movie" });
									}}
									className="item"
								>
									Movies
								</div>
								<div
									onClick={() => {
										this.setState({ search: "/search/tv" });
									}}
									className="item"
								>
									Tv Shows
								</div>
							</div>
						</div>
					</i>

					<i style={{ marginRight: "20px" }} className="search icon"></i>
					<input
						className="search"
						name="search"
						type="text"
						placeholder={
							this.state.search === "/search/movie"
								? "Search Movies"
								: "Search TV Shows"
						}
						value={this.state.term}
						onChange={this.onInputChange}
					></input>
				</div>
			</form>
		);
	}
}

export default SearchBar;
