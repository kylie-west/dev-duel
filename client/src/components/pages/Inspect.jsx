import { useState } from "react";
import { Page } from "./pageStyles";
import { Input, Button } from "../../components";
import { inspectUser } from "../../services/userService";

const Inspect = ({ devs, setDevs }) => {
	const [inputValue, setInputValue] = useState("");

	const handleClick = async e => {
		const user = await inspectUser(inputValue);
		setDevs({ ...devs, dev1: user });
		setInputValue("");
	};

	return (
		<Page>
			<div>
				<Input
					type="text"
					placeholder="username"
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<Button onClick={handleClick}>Inspect</Button>
			</div>
		</Page>
	);
};

export default Inspect;
