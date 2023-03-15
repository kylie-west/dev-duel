import styled from "styled-components";
import { Page } from "./pageStyles";
import { Container, Button } from "../../components";

const Home = () => {
	return (
		<Page>
			<Container gap="50px" direction="column">
				<h1>Welcome to Dev Duel.</h1>
				<Container gap="40px">
					<Container gap="15px" direction="column">
						<Button to="/inspect" width="150px">
							Inspect
						</Button>
						<Info className="info">Look up a fellow dev's GitHub Info.</Info>
					</Container>
					<Container gap="15px" direction="column">
						<Button to="/duel" width="150px">
							Duel
						</Button>
						<Info className="info">Pick two devs to go head to head.</Info>
					</Container>
				</Container>
			</Container>
		</Page>
	);
};

export default Home;

const Info = styled.div`
	width: 14ch;
	line-height: 120%;
	color: #6c7782;
`;
