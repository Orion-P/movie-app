import React from "react";

const Footer = () => {
	return (
		<div
			style={{
				backgroundColor: "#1a0000",
				width: "100%",
				paddingTop: "30px",
				paddingBottom: "30px",
				textAlign: "center"
			}}
		>
			<p style={{ color: "white", margin: "0 auto" }}>
				<strong> Movie App Developed by Orion Poptean</strong>
			</p>
			<br></br>
			<p style={{ color: "white", margin: "0 auto" }}>
				<a href="https://github.com/Orion-P/movie-app" style={{ color: "skyblue" }}>
					<strong>Github </strong>
				</a>
				|
				<a href="" style={{ color: "skyblue" }}>
					<strong> Resume</strong>
				</a>
			</p>
		</div>
	);
};

export default Footer;
