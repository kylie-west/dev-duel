import styled from "styled-components";

export const StyledButton = styled.button`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	padding: 10px 40px;
	font-size: 18px;
	border: 2px solid #000;
	border-radius: 10px;
	color: #000;
	background-color: #fff;

	&:hover {
		color: #fff;
		background-color: #000;
		cursor: pointer;
	}
`;
