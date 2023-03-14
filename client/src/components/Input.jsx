import styled from "styled-components";

const Input = styled.input`
	width: 20ch;
	max-width: 40vw;
	height: 45px;
	padding: 0 10px;
	font-size: 18px;
	background-color: #c2d9e8;
	border: 1px solid #34373f;
	border-radius: 10px;

	&:focus {
		border: 2px;
	}

	&::placeholder {
		color: #647d9f;
	}
`;

export default Input;
