import { useState } from "react";
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
import { inspectUser } from "../../services/userService";

const Inspect = ({ devs, setDevs, errors, setErrors, getErrorMsg }) => {
	const dev = devs.dev1;
	const error = errors.inspect;

	const [inputValue, setInputValue] = useState("");
	const [loading, setLoading] = useState(false);

	const handleClick = async e => {
		if (!inputValue) {
			setErrors({ ...errors, inspect: "You forgot to enter a username!" });
			return;
		}

		setLoading(true);

		const data = await inspectUser(inputValue);
		if (!data.username) {
			setErrors({ ...errors, inspect: data.message });
			setLoading(false);
			return;
		}

		setErrors({ ...errors, inspect: "" });
		setDevs({ dev1: data, dev2: null });
		setLoading(false);
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
				{loading ? (
					<LoadingSpinner />
				) : (
					<Button onClick={handleClick}>Inspect</Button>
				)}
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
