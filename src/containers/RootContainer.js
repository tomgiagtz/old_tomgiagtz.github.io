import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import HomeContainer from "./HomeContainer";
import PortfolioContainer from "./PortfolioContainer";
import ResumeContainer from "./ResumeContainer";
import styled from "styled-components";
import MenuComponent from "../components/MenuComponent";

const StyledRoot = styled.div`
	position: relative;
	overflow: hidden;
	transition: all 0.15s;
	margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

class RootContainer extends Component {
	state = {
		expanded: false
	};

	onToggle = expanded => {
		this.setState({ expanded });
	};

	render() {
		const { expanded } = this.state;
		return (
			<React.Fragment>
				<MenuComponent onToggle={this.onToggle} />
				<StyledRoot expanded={expanded}>
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
				</StyledRoot>
			</React.Fragment>
		);
	}
}

export default withRouter(RootContainer);