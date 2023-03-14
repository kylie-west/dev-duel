import styled from "styled-components";

export const Properties = ({ dev }) => {
	return (
		<StyledProperties>{dev ? <li>{dev.username}</li> : null}</StyledProperties>
	);
};

export default Properties;

const StyledProperties = styled.ul`
	list-style-type: none;
`;
