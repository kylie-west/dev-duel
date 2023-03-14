import styled from "styled-components";

export const Page = styled.main`
	display: flex;
	justify-content: center;
	text-align: center;
	height: calc(100vh - 80px);
	padding: 100px 0;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction || "row"};
	align-items: center;
	gap: ${({ gap }) => gap};
`;
