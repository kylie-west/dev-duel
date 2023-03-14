import styled from "styled-components";

export const Page = styled.main`
	display: flex;
	flex-direction: column;
	text-align: center;
	height: calc(100vh - 80px);
	padding: 75px 0;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction || "row"};
	justify-content: center;
	align-items: center;
	gap: ${({ gap }) => gap};
`;
