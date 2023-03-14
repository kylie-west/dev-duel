import { Avatar, Bio } from "./Profile.styles";
import { Container } from "../../components";

const Profile = ({ dev }) => {
	const { avatar_url, bio } = dev;

	return (
		<Container direction="column" gap="10px">
			<Avatar src={avatar_url} />
			<Bio>{bio}</Bio>
		</Container>
	);
};

export default Profile;
