import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction || "row"};
	justify-content: center;
	align-items: center;
	gap: ${({ gap }) => gap};
	max-width: 100vw;

	@media screen and (max-width: 900px) {
		flex-direction: ${({ directionMobile }) => directionMobile};
	}
`;

export default Container;
