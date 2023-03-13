import styled from "styled-components";
import { Page } from "./pageStyles";

const Home = () => {
	return (
		<Page>
			<Container>
				<h1>Welcome to Dev Duel</h1>
				<div>
					<button>Inspect</button>
					<button>Duel</button>
				</div>
			</Container>
		</Page>
	);
};

export default Home;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`;
