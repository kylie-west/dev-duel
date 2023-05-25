import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 10px 40px;
  font-size: 18px;
  border: 2px solid #000;
  border-radius: 10px;
  font-size: 24px;
  font-family: "Staatliches";
  color: #fff;
  background-color: #000;
  transition: 100ms;

  &:hover {
    color: #000;
    background-color: #fff;
    cursor: pointer;
  }
`;
