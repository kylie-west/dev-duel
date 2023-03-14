import styled from "styled-components";

export const List = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const ListItem = styled.li`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const Label = styled.div`
	padding: 0 5px;
	background-color: #c2d9e8;
	border-radius: 5px;
	&.winner {
		background-color: #f0a431;
		padding: 3px 8px;
		& + span {
			font-weight: 800;
		}
	}
`;

export const Value = styled.span`
	display: inline-block;
	max-width: 20ch;
`;
