import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faFolderOpen, faFile } from "@fortawesome/free-solid-svg-icons";


class MenuComponent extends Component {
	state = {
		selected: this.props.location.pathname.substring(1)
	};


	onSelect = selected => {
		this.setState({ selected });
		let { history, location } = this.props;
		const to = "/" + selected;
		if (location.pathname !== to) {
			history.push(to);
		}
	};

	render() {
		const { selected } = this.state;
		let sideNavStyle = { background: "#333" };
		let iconStyle = {
			verticalAlign: "middle",
			color: "#ddd"
		};
		return (
			<Route
				render={() => {
					return (
						<React.Fragment>
							<SideNav
								onSelect={this.onSelect}
								onToggle={this.onToggle}
								style={sideNavStyle}
							>
								<SideNav.Toggle />
								<SideNav.Nav selected={selected}>
									<NavItem eventKey="home">
										<NavIcon>
											<FontAwesomeIcon
												icon={faCoffee}
												size="2x"
												style={iconStyle}
											/>
										</NavIcon>
										<NavText>Home</NavText>
									</NavItem>
									<NavItem eventKey="resume">
										<NavIcon>
											<FontAwesomeIcon
												icon={faFile}
												size="2x"
												style={iconStyle}
											/>
										</NavIcon>
										<NavText>Resume</NavText>
									</NavItem>
									<NavItem eventKey="portfolio">
										<NavIcon>
											<FontAwesomeIcon
												icon={faFolderOpen}
												size="2x"
												style={iconStyle}
											/>
										</NavIcon>
										<NavText>Portfolio</NavText>
									</NavItem>
								</SideNav.Nav>
							</SideNav>
							
						</React.Fragment>
					);
				}}
			/>
		);
	}
}

export default withRouter(MenuComponent);
