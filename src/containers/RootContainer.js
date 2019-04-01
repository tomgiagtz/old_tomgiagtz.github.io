import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import HomeContainer from "./HomeContainer";
import PortfolioContainer from "./PortfolioContainer";
import ResumeContainer from "./ResumeContainer";
import styled from "styled-components";
import MenuComponent from "../components/MenuComponent";
import { pathToName } from "../utilities";
import bg from "../images/house-web.jpg";
import './styles/RootContainer.css'

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

	onMouseEnter = () => {
		this.setState({ photoHover: true });
	};

	onMouseLeave = () => {
		this.setState({ photoHover: false });
	};

	onClick = () => {
		this.setState({ photoHover: false });
	};

	render() {
		const { expanded } = this.state;
		return (
			<React.Fragment>
				<MenuComponent onToggle={this.onToggle} />
				<StyledRoot expanded={expanded}>
					<img
						src={bg}
						alt={pathToName(bg)}
						className="bg"
						onMouseEnter={this.onMouseEnter}
						onMouseLeave={this.onMouseLeave}
						onClick={this.onClick}
					/>
					<div className="overlay">
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
					</div>
				</StyledRoot>
			</React.Fragment>
		);
	}
}

export default withRouter(RootContainer);
