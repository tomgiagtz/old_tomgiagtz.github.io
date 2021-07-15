import React from "react";
import PDF from "react-pdf-js";
import resume from "../images/GiagtzoglouResume.pdf";
import "./styles/ResumeContainer.css";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumeContainer = () => {
	return (
		<div className="resume-container">

			<div className="resume-child">	
				<h1 className="header"> Resume </h1>
			</div>

			<div className="resume-child pdf-container">
			<PDF file={resume} />
			<a href={resume}>
				<FontAwesomeIcon icon={faFileDownload} size="2x" className='download'/>
			</a>
			</div>
		</div>
	);
};

export default ResumeContainer;
