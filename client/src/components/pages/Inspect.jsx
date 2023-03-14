import { useState } from "react";
import { Page, Container } from "./pageStyles";
import { Input, Button } from "../../components";
import { inspectUser } from "../../services/userService";

const Inspect = ({ devs, setDevs }) => {
	const [inputValue, setInputValue] = useState("");

	const handleClick = async e => {
		if (!inputValue) {
			console.error(" Must enter a username to inspect");
		} else {
			const user = await inspectUser(inputValue);
			setDevs({ ...devs, dev1: user });
		}
		setInputValue("");
	};

	return (
		<Page>
			<Container gap="50px" direction="column">
				<Input
					type="text"
					placeholder="username"
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<Button onClick={handleClick}>Inspect</Button>
			</Container>
		</Page>
	);
};

export default Inspect;
