import styled from "styled-components";

const Input = styled.input`
	width: 20ch;
	max-width: 40vw;
	height: 45px;
	padding: 0 10px;
	font-size: 18px;
	background-color: #d5e0e8;
	border: none;
	border-radius: 10px;
	box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);

	&:focus {
		outline: none;
		background-color: #c2d9e8;
		box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
	}

	&::placeholder {
		color: #647d9f;
	}
`;

export default Input;
