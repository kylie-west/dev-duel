import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Home, Inspect, Duel } from "./components";

function App() {
	const [devs, setDevs] = useState({ dev1: null, dev2: null });

	const [winner, setWinner] = useState({
		dev: null,
		winningProperty: null,
		tie: false
	});

	return (
		<Router>
			<GlobalStyles />
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/inspect">
					<Inspect devs={devs} setDevs={setDevs} />
				</Route>
				<Route path="/duel">
					<Duel
						devs={devs}
						setDevs={setDevs}
						winner={winner}
						setWinner={setWinner}
					/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
