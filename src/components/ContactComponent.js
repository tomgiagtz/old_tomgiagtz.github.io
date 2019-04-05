import React from "react";

// github medium behance linkedIn email
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithubSquare,
	faMedium,
	faBehanceSquare,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import './styles/ContactComponent.css'

const social = {
	github : "https://github.com/tomgiagtz",
	medium : "https://medium.com/@tom.giagtzoglou",
	behance : "https://www.behance.net/tomgiagtz",
	linkedIn : "https://www.linkedin.com/in/tomgia/",
	email : "mailto:tomgiagtzoglou+contact@gmail.com"
}


export default function ContactComponent() {
	return (
		<div className="icon-container">

			
			<a href={social.github} className="icon" ><FontAwesomeIcon  icon={faGithubSquare} size="3x" /></a>
			<a href={social.medium} className="icon" ><FontAwesomeIcon  icon={faMedium} size="3x" /></a>
			<a href={social.behance} className="icon" ><FontAwesomeIcon  icon={faBehanceSquare} size="3x" /></a>
			<a href={social.linkedIn} className="icon" ><FontAwesomeIcon  icon={faLinkedin} size="3x" /></a>
			<a href={social.email} className="icon" ><FontAwesomeIcon  icon={faEnvelopeSquare} size="3x" /></a>
		</div>
	);
}
