import React, { Component } from "react";
import "./styles/HomeContainer.css";
import bg from "../images/house-web.jpg";
import { pathToName } from "../utilities";

export default class HomeContainer extends Component {
	render() {
		return (
			<>
				<img src={bg} alt={pathToName(bg)} className="bg" />
				<div id="overlay" />
				<div>Hello</div>
			</>
		);
	}
}
