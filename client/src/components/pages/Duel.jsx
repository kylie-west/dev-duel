import { useState, useEffect } from "react";
import { Page } from "./pageStyles";
import {
	Container,
	Input,
	Button,
	Card,
	Profile,
	Properties
} from "../../components";
import { duelUsers } from "../../services/userService";

const Duel = ({ devs, setDevs }) => {
	const { dev1, dev2 } = devs;

	const [form, setForm] = useState({
		inputValue1: "",
		inputValue2: ""
	});

	const [winner, setWinner] = useState({
		dev: null,
		winningProperty: null,
		tie: false
	});

	const getWinner = (dev1, dev2) => {
		const stars1 = dev1["total-stars"];
		const stars2 = dev2["total-stars"];
		const followers1 = dev1.followers;
		const followers2 = dev2.followers;
		const repos1 = dev1["public-repos"];
		const repos2 = dev2["public-repos"];

		if (stars1 > stars2) {
			return { ...winner, dev: dev1, winningProperty: "total-stars" };
		} else if (stars1 < stars2) {
			return { ...winner, dev: dev2, winningProperty: "total-stars" };
		}

		// # stars same -> compare # followers
		if (followers1 > followers2) {
			return { ...winner, dev: dev1, winningProperty: "followers" };
		} else if (followers1 < followers2) {
			return { ...winner, dev: dev2, winningProperty: "followers" };
		}

		// # followers same -> compare # repos
		if (repos1 > repos2) {
			return { ...winner, dev: dev1, winningProperty: "public-repos" };
		} else if (repos1 < repos2) {
			return { ...winner, dev: dev2, winningProperty: "public-repos" };
		}

		return { ...winner, tie: true };
	};

	const handleClick = async e => {
		if (!form.inputValue1 || !form.inputValue2) {
			console.error("Must enter both usernames to duel");
			return;
		}

		// Reset winner
		setWinner({ dev: null, winningProperty: null, tie: false });

		const userData = await duelUsers(form.inputValue1, form.inputValue2);
		const dev1 = userData[0];
		const dev2 = userData[1];

		setDevs({ dev1, dev2 });
		setWinner(getWinner(dev1, dev2));
		setForm({ inputValue1: "", inputValue2: "" });
	};

	useEffect(() => {
		// If user has already inspected a dev, auto-add dev username to input on Duel page for convenience
		if (dev1 && !dev2) {
			setForm({ ...form, inputValue1: dev1.username });
		}
	}, []);

	return (
		<Page>
			<Container gap="25px" direction="column">
				<Container gap="30px">
					<Input
						type="text"
						placeholder="username 1"
						value={form.inputValue1}
						onChange={e => setForm({ ...form, inputValue1: e.target.value })}
					/>
					<Input
						type="text"
						placeholder="username 2"
						value={form.inputValue2}
						onChange={e => setForm({ ...form, inputValue2: e.target.value })}
					/>
				</Container>
				<Button onClick={handleClick}>Duel</Button>
			</Container>
			{dev1 && dev2 ? (
				<Container gap="25px" directionMobile="column">
					<Card dev={dev1} winner={winner} directionMobile="column">
						<Profile dev={dev1} />
						<Properties dev={dev1} winner={winner} />
					</Card>
					<h1>VS</h1>
					<Card dev={dev2} winner={winner} directionMobile="column">
						<Profile dev={dev2} />
						<Properties dev={dev2} winner={winner} />
					</Card>
				</Container>
			) : null}
		</Page>
	);
};

export default Duel;
