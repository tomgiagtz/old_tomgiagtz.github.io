import React, { Component } from "react";
import "./styles/IntroComponent.css";
import profile from "../images/profile.jpg";

export default class IntroComponent extends Component {
	render() {
		return (
			<div className="intro">
				<h1 className="header">Tom Giagtzoglou</h1>
				<div className="details">
					<p>Web and Graphic Designer</p>
					<p> Creative Enginner </p>
				</div>
				<div className="profile">
					<img src={profile} alt="Tom Giagtzoglou" />
					<div className="about-me">
						<h2> About Me </h2>
						<p>
							Fascinated by combinations of art and technology, my
							passion is the intersection of engineering and
							aesthetics. I'm always excited to learn and
							expirement with new technologies and mediums. I was
							born in Sydney, Australia and raised in Washington,
							DC.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
