import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Home, Inspect, Duel } from "./components";
import { inspectUser, duelUsers } from "./services/userService";
import { useEffect } from "react";

function App() {
	// Hook that runs after React has updated the DOM
	useEffect(() => {}, []);

	return (
		<Router>
			<GlobalStyles />
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/inspect">
					<Inspect />
				</Route>
				<Route path="/duel">
					<Duel />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
