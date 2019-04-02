import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomeContainer from "./HomeContainer";
import PortfolioContainer from "./PortfolioContainer";
import ResumeContainer from "./ResumeContainer";
import styled from "styled-components";
import MenuComponent from "../components/MenuComponent";
import { pathToName } from "../utilities";
import bg from "../images/house-web.jpg";
import "./styles/RootContainer.css";

const Overlay = styled.div`
	position: fixed; /* Sit on top of the page content */
	width: 90%; /* Full width (cover the whole page) */
	height: 95%; /* Full height (cover the whole page) */
	left: 64px;
	background-color: rgba(0, 0, 0, 0.2); /* Black background with opacity */
	z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
	cursor: pointer; /* Add a pointer on hover */
	${props => (props.hover ? "display: none;" : "")};
	min-width: 320px;

	@media (max-width: 640px) {
			width: 80%;
			right: 64px;
		}
	}
`;

const StyledRoot = styled.div`
	position: relative;
	overflow: hidden;
	transition: all 0.15s;
	margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

class RootContainer extends Component {
	state = {
		expanded: false,
		photoHover: false
	};

	onToggle = expanded => {
		this.setState({ expanded });
	};

	onClick = () => {
		this.setState({ photoHover: !this.state.photoHover });
	};

	render() {
		const { expanded } = this.state;
		return (
			<>
				<MenuComponent onToggle={this.onToggle} />
				<StyledRoot expanded={expanded}>
					<img
						src={bg}
						alt={pathToName(bg)}
						className="bg"
						onClick={this.onClick}
					/>
					<Overlay
						hover={this.state.photoHover}
					>
						<div className="content">
							<Route
								path="/"
								exact
								component={props => <HomeContainer />}
							/>
							<Route
								path="/home"
								component={props => <HomeContainer />}
							/>
							<Route
								path="/resume"
								component={props => <ResumeContainer />}
							/>
							<Route
								path="/portfolio"
								component={props => <PortfolioContainer />}
							/>
						</div>
					</Overlay>
					)
				</StyledRoot>
			</>
		);
	}
}

export default RootContainer;
