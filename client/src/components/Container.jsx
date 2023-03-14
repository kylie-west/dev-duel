import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction || "row"};
	justify-content: center;
	align-items: center;
	gap: ${({ gap }) => gap};
`;

export default Container;
