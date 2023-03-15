import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Home, Inspect, Duel } from "./components";

function App() {
	const [devs, setDevs] = useState({ dev1: null, dev2: null });
	const [errors, setErrors] = useState({ duel: "", inspect: "" });
	const [winner, setWinner] = useState({
		dev: null,
		winningProperty: null,
		tie: false
	});

	// Would probably move this into a utils file if the app were bigger
	const getErrorMsg = err => {
		if (
			err === "You forgot to enter a username!" ||
			err === "You have to enter both usernames to duel."
		) {
			return err;
		} else if (err === "Not Found") {
			return "User(s) not found :(";
		} else {
			return "Username is invalid. Try something else.";
		}
	};

	return (
		<Router>
			<GlobalStyles />
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/inspect">
					<Inspect
						devs={devs}
						setDevs={setDevs}
						errors={errors}
						setErrors={setErrors}
						getErrorMsg={getErrorMsg}
					/>
				</Route>
				<Route path="/duel">
					<Duel
						devs={devs}
						setDevs={setDevs}
						winner={winner}
						setWinner={setWinner}
						errors={errors}
						setErrors={setErrors}
						getErrorMsg={getErrorMsg}
					/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
