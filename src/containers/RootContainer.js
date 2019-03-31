import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import HomeContainer from "./HomeContainer";
import PortfolioContainer from "./PortfolioContainer";
import ResumeContainer from "./ResumeContainer";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCoffee } from "@fortawesome/free-solid-svg-icons";

const StyledRoot = styled.div`
	position: relative;
	overflow: hidden;
	transition: all 0.15s;
	padding: 20px 20px 0px;
	margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

class RootContainer extends Component {
	state = {
		expanded: false,
		selected: this.props.location.pathname.substring(1)
	};

	onToggle = expanded => {
		this.setState({ expanded });
	};

	onSelect = selected => {
		
		this.setState({ selected });
		let {history, location} = this.props
		const to = "/" + selected;
		if (location.pathname !== to) {
			history.push(to);
		}
	};
	

	render() {
		const { expanded, selected } = this.state;
		let sideNavStyle= {background: '#333'} 
		let iconStyle = {
			verticalAlign: "middle",
			color: '#ddd'
		}
		return (
			<Route
				render={() => {
					return (
						<React.Fragment>
							<SideNav
								onSelect={this.onSelect}
								onToggle={this.onToggle}
								style = {sideNavStyle}
							>
								<SideNav.Toggle />
								<SideNav.Nav selected={selected}>
									<NavItem eventKey="home">
										<NavIcon>
											<FontAwesomeIcon
												icon={faHome}
												size="2x"
												style={iconStyle}
											/>
										</NavIcon>
										<NavText>Home</NavText>
									</NavItem>
									<NavItem eventKey="resume">
										<NavIcon>
											<FontAwesomeIcon
												icon={faCoffee}
												size="2x"
												style={iconStyle}
											/>
										</NavIcon>
										<NavText>Resume</NavText>
									</NavItem>
								</SideNav.Nav>
							</SideNav>
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
				}}
			/>
		);
	}
}

export default withRouter(RootContainer);
