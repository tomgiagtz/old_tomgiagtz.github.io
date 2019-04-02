import React, { Component } from "react";
import "./App.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { HashRouter as Router } from "react-router-dom";
import RootContainer from "./containers/RootContainer"

class App extends Component {
	render() {
		return (
			<Router>
				<RootContainer/>
			</Router>
		);
	}
}

export default App;
