import { StyledButton } from "./Button.styles";
import { withRouter } from "react-router-dom";

const Button = ({ children, to, history, width, height }) => {
	const handleClick = e => {
		e.preventDefault();
		history.push(to);
	};

	return (
		<StyledButton onClick={handleClick} width={width} height={height}>
			{children}
		</StyledButton>
	);
};

export default withRouter(Button);
