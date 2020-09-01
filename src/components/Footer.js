import React from "react";

const Footer = () => {
	return (
		<div
			style={{
				backgroundColor: "#1a0000",
				width: "100%",
				paddingTop: "40px",
				paddingBottom: "30px",
				textAlign: "center"
			}}
		>
			<p style={{ color: "white", margin: "0 auto", fontSize: '23px' }}>
				<strong> Movie App Developed by Orion Poptean</strong>
			</p>
			<br></br>
			<p style={{ color: "white", margin: "0 auto", fontSize: '20px' }}>
				<a
					href="https://github.com/Orion-P/movie-app"
					style={{ color: "skyblue" }}
				>
					<strong>Github </strong>
				</a>
			</p>
		</div>
	);
};

export default Footer;
