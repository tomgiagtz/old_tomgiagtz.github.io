import React from 'react'
import PDF from 'react-pdf-js'
import resume from '../images/resume.pdf'
import './styles/ResumeContainer.css'

const ResumeContainer = () => {
	return (
		<>
			<PDF file={resume}/>
			<a href={resume}> Download Here </a>
		</>
	)
}

export default ResumeContainer

