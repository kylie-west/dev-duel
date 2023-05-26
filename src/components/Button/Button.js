import { StyledButton } from "./Button.styles";

const Button = ({ children, width, height, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick && onClick(e);
  };

  return (
    <StyledButton onClick={handleClick} width={width} height={height}>
      {children}
    </StyledButton>
  );
};

export default Button;
