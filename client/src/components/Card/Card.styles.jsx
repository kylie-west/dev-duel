import styled from "styled-components";

export const StyledCard = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	gap: 50px;
	width: fit-content;
	max-width: 90vw;
	padding: 50px;
	margin: 50px 0;
	background-color: #fff;
	border: 2px solid #000;
	border-radius: 10px;

	@media screen and (max-width: 900px) {
		flex-direction: ${({ directionMobile }) => directionMobile};
		align-items: center;
		font-size: 12px;
	}
`;

export const Message = styled.div`
	position: absolute;
	left: 50%;
	top: -50px;
	transform: translateX(-50%);
	font-size: 30px;
	font-weight: 800;
`;
