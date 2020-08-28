import React from "react";
import "../css/Slideshow.css";
import axios from "axios";
//56a76f413e126fc9841c4c59db456d01

class SlideShow extends React.Component {
	state = { movies: [], currentMovie: {} };

	componentDidMount() {
		axios
			.get("https://api.themoviedb.org/3/movie/upcoming", {
				params: {
					api_key: "56a76f413e126fc9841c4c59db456d01"
				}
			})
			.then(res => {
				this.setState({ movies: res.data.results });
				this.setState({ currentMovie: this.state.movies[0] });
				console.log(res.data.results);
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className="root">
				<div className="slideshow">
					<div className="ui text">
						<h1 className="title">
							{this.state.movies[0]
								? this.state.movies[0].original_title
								: null}
						</h1>
					</div>
					<img
						src={`https://image.tmdb.org/t/p/original${this.state.currentMovie.backdrop_path}`}
						className="image"
					></img>
				</div>
			</div>
		);
	}
}

export default SlideShow;
