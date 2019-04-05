import React from "react";
import PDF from "react-pdf-js";
import resume from "../images/resume.pdf";
import "./styles/ResumeContainer.css";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumeContainer = () => {
	return (
		<div>
		<a href={resume}>
				<FontAwesomeIcon icon={faFileDownload} size="2x" className='download'/>
			</a>
			<PDF file={resume} />
			
		</div>
	);
};

export default ResumeContainer;
