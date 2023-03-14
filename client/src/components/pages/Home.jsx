import { Page, Container } from "./pageStyles";
import { Button } from "../../components";

const Home = () => {
	return (
		<Page>
			<Container gap="50px" direction="column">
				<h1>Welcome to Dev Duel</h1>
				<Container gap="30px">
					<Button to="/inspect" width="150px">
						Inspect
					</Button>
					<Button to="/duel" width="150px">
						Duel
					</Button>
				</Container>
			</Container>
		</Page>
	);
};

export default Home;
