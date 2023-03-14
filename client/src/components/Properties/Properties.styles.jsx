import styled from "styled-components";

export const List = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const ListItem = styled.li`
	display: flex;
	gap: 10px;
`;

export const Label = styled.div`
	padding: 0 5px;
	background-color: #c2d9e8;
	border-radius: 5px;
`;

export const Value = styled.span`
	display: inline-block;
	max-width: 20ch;
`;
