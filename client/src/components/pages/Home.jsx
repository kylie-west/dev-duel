import styled from "styled-components";
import { Page } from "./pageStyles";
import { Button } from "../../components";

const Home = () => {
	return (
		<Page>
			<Container>
				<h1>Welcome to Dev Duel</h1>
				<ButtonWrapper>
					<Button to="/inspect" width="150px">
						Inspect
					</Button>
					<Button to="/duel" width="150px">
						Duel
					</Button>
				</ButtonWrapper>
			</Container>
		</Page>
	);
};

export default Home;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
`;

const ButtonWrapper = styled.div`
	display: flex;
	gap: 30px;
`;
