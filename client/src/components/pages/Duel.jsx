import { useState, useEffect } from "react";
import styled from "styled-components";
import { Page } from "./pageStyles";
import { Input, Button } from "../../components";
import { duelUsers } from "../../services/userService";

const Duel = ({ devs, setDevs }) => {
	const [form, setForm] = useState({
		inputValue1: "",
		inputValue2: ""
	});

	const handleClick = async e => {
		const users = await duelUsers(form.inputValue1, form.inputValue2);
		setDevs({ dev1: users[0], dev2: users[1] });
		setForm({ inputValue1: "", inputValue2: "" });
	};

	useEffect(() => {
		if (devs.dev1) {
			setForm({ ...form, inputValue1: devs.dev1.username });
		}
	}, []);

	return (
		<Page>
			<div>
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
				<Button onClick={handleClick}>Duel</Button>
			</div>
		</Page>
	);
};

export default Duel;
