import { useState } from "react";
import { Page } from "./pageStyles";
import {
	Container,
	Input,
	Button,
	Card,
	Profile,
	Properties,
	Error
} from "../../components";
import { inspectUser } from "../../services/userService";

const Inspect = ({ devs, setDevs, errors, setErrors, getErrorMsg }) => {
	const dev = devs.dev1;
	const error = errors.inspect;

	const [inputValue, setInputValue] = useState("");

	const handleClick = async e => {
		if (!inputValue) {
			setErrors({ ...errors, inspect: "You forgot to enter a username!" });
			return;
		}

		const data = await inspectUser(inputValue);
		if (!data.username) {
			setErrors({ ...errors, inspect: data.message });
			return;
		}

		setErrors({ ...errors, inspect: "" });
		setDevs({ dev1: data, dev2: null });
		setInputValue("");
	};

	return (
		<Page>
			<Container gap="25px" direction="column">
				<Input
					type="text"
					placeholder="username"
					value={inputValue}
					onChange={e => {
						setInputValue(e.target.value);
						setErrors({ ...errors, inspect: "" });
					}}
				/>
				{error && <Error>{getErrorMsg(error)}</Error>}
				<Button onClick={handleClick}>Inspect</Button>
			</Container>
			<Container>
				{dev && (
					<Card dev={dev} directionMobile="column">
						<Profile dev={dev} />
						<Properties dev={dev} />
					</Card>
				)}
			</Container>
		</Page>
	);
};

export default Inspect;
