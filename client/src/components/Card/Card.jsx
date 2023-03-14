import { StyledCard, Message } from "./Card.styles";

const Card = ({ dev, winner, children }) => {
	if (dev) {
		return (
			<StyledCard>
				{!winner ? null : winner.dev === dev ? (
					<Message>Winner!</Message>
				) : (
					winner.tie && <Message>Tie</Message>
				)}
				{children}
			</StyledCard>
		);
	} else return null;
};

export default Card;
