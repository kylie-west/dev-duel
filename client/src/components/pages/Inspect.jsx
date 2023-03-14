import { useState } from "react";
import { Page } from "./pageStyles";
import {
	Container,
	Input,
	Button,
	Profile,
	Properties
} from "../../components";
import { inspectUser } from "../../services/userService";
import Card from "../Card/Card";

const Inspect = ({ devs, setDevs }) => {
	const [inputValue, setInputValue] = useState("");

	const handleClick = async e => {
		if (!inputValue) {
			console.error(" Must enter a username to inspect");
		} else {
			const user = await inspectUser(inputValue);
			setDevs({ dev1: user, dev2: null });
		}
		setInputValue("");
	};

	return (
		<Page>
			<Container gap="25px" direction="column">
				<Input
					type="text"
					placeholder="username"
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<Button onClick={handleClick}>Inspect</Button>
			</Container>
			<Container>
				{devs.dev1 && (
					<Card>
						<Profile dev={devs.dev1} />
						<Properties dev={devs.dev1} />
					</Card>
				)}
			</Container>
		</Page>
	);
};

export default Inspect;
