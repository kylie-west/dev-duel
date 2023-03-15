import { useState, useEffect } from "react";
import { Page } from "./pageStyles";
import {
	Container,
	Input,
	Button,
	Card,
	Profile,
	Properties,
	Error,
	LoadingSpinner
} from "../../components";
import { duelUsers } from "../../services/userService";

const Duel = ({
	devs,
	setDevs,
	winner,
	setWinner,
	errors,
	setErrors,
	getErrorMsg
}) => {
	const { dev1, dev2 } = devs;
	const error = errors.duel;

	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		inputValue1: "",
		inputValue2: ""
	});

	const getWinner = (dev1, dev2) => {
		const properties = [
			{
				name: "total-stars",
				dev1: dev1["total-stars"],
				dev2: dev2["total-stars"]
			},
			{ name: "followers", dev1: dev1.followers, dev2: dev2.followers },
			{
				name: "public-repos",
				dev1: dev1["public-repos"],
				dev2: dev2["public-repos"]
			}
		];

		const result = { ...winner };

		// First compare stars, then followers, then repos
		properties.forEach(property => {
			if (result.dev) return;

			// Property being compared
			result.winningProperty = property.name;

			// Compare each dev's values and set winner
			if (property.dev1 > property.dev2) {
				result.dev = dev1;
			} else if (property.dev1 < property.dev2) {
				result.dev = dev2;
			}
		});

		// If still no winner, declare tie
		if (!result.dev) {
			result.tie = true;
		}

		return result;
	};

	const handleClick = async e => {
		if (!form.inputValue1 || !form.inputValue2) {
			setErrors({
				...errors,
				duel: "You have to enter both usernames to duel."
			});
			return;
		}

		setLoading(true);
		const data = await duelUsers(form.inputValue1, form.inputValue2);
		if (!Array.isArray(data)) {
			setErrors({ ...errors, duel: data.message });
			setLoading(false);
			return;
		}
		const dev1 = data[0];
		const dev2 = data[1];

		// Reset winner & error
		setWinner({ dev: null, winningProperty: null, tie: false });
		setErrors({ ...errors, duel: "" });

		setDevs({ dev1, dev2 });
		setLoading(false);
		setWinner(getWinner(dev1, dev2));
		setForm({ inputValue1: "", inputValue2: "" });
	};

	useEffect(() => {
		// If user has already inspected a dev, auto-add dev username to input on Duel page for convenience
		if (dev1 && !dev2) {
			setForm({ ...form, inputValue1: dev1.username });
		}
		// eslint-disable-next-line
	}, []);

	return (
		<Page>
			<Container gap="25px" direction="column">
				<Container gap="30px">
					<Input
						type="text"
						placeholder="username 1"
						value={form.inputValue1}
						onChange={e => {
							setForm({ ...form, inputValue1: e.target.value });
							setErrors({ ...errors, duel: "" });
						}}
					/>
					<Input
						type="text"
						placeholder="username 2"
						value={form.inputValue2}
						onChange={e => {
							setForm({ ...form, inputValue2: e.target.value });
							setErrors({ ...errors, duel: "" });
						}}
					/>
				</Container>
				{error && <Error>{getErrorMsg(error)}</Error>}
				{loading ? (
					<LoadingSpinner />
				) : (
					<Button onClick={handleClick}>Duel</Button>
				)}
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
