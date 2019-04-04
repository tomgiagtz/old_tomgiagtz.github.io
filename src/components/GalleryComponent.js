import React, { Component } from "react";
import Gallery from "react-photo-gallery"
import Lightbox from "react-images";
import { importAll, createSrcSet } from "../utilities";
import descriptions from "../images/portfolio/descriptions";
import './styles/GalleryComponent.css'

export default class GalleryComponent extends Component {
	state = {
		srcSet: [],
		lightboxIsOpen: false,
		currentImage: 0
	};
	render() {
		
		return (

			<>
				
				<Gallery  photos={this.state.srcSet} onClick={this.openLightbox} direction={'column'}/>
				<Lightbox
					currentImage={this.state.currentImage}
					images={this.state.srcSet}
					isOpen={this.state.lightboxIsOpen}
					onClickImage={this.handleClickImage}
					onClickNext={this.gotoNext}
					onClickPrev={this.gotoPrevious}
					onClickThumbnail={this.gotoImage}
					onClose={this.closeLightbox}
				/>
			</>
		);
	}


	openLightbox = (event, {index}) => {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true
		});
	};
	closeLightbox = () => {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false
		});
	};
	gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1
		});
	};
	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1
		});
	};
	gotoImage = index => {
		this.setState({
			currentImage: index
		});
	};
	handleClickImage = () => {
		if (this.state.currentImage === this.state.srcSet.length - 1) return;

		this.gotoNext();
	};
	componentWillMount = () => {
		const images = importAll(
			require.context("../images/portfolio", false, /\.(png|jpe?g|svg)$/)
		);
		console.log(images)
		let desc = descriptions;

		this.setState({ srcSet: createSrcSet(images, desc) });
	};
	
}
