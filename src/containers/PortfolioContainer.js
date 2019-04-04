import React, { Component } from "react";
import GalleryComponent from "../components/GalleryComponent";
import { Tabs, TabPanel } from "@zendeskgarden/react-tabs";
import PortfolioInfoComponent from "../components/PortfolioInfoComponent";
import CreativeCodingComponent from "../components/CreativeCodingComponent"
import "@zendeskgarden/react-tabs/dist/styles.css";
import "./styles/PortfolioContainer.css";
const CREATIVE_CODING = "creative-coding";
const GALLERY = "gallery";

export default class PortfolioContainer extends Component {
	state = { selectedKey: GALLERY };
	render() {
		return (
			<>
				<PortfolioInfoComponent />
				<Tabs
					selectedKey={this.state.selectedKey}
					onChange={selectedKey => this.setState({ selectedKey })}
				>
					<TabPanel label="Gallery" key={GALLERY}>
						<GalleryComponent />
					</TabPanel>
					<TabPanel label="Creative Coding" key={CREATIVE_CODING}>
						<CreativeCodingComponent />
					</TabPanel>
				</Tabs>
			</>
		);
	}
}

