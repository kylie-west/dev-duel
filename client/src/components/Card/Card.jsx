import { StyledCard, Message } from "./Card.styles";

const Card = ({ dev, winner, children }) => {
	return (
		<StyledCard>
			{winner.dev === dev ? (
				<Message>Winner!</Message>
			) : (
				winner.tie && <Message>Tie</Message>
			)}
			{children}
		</StyledCard>
	);
};

export default Card;
