import { Avatar, Bio } from "./Profile.styles";
import { Properties } from "./Properties";

const Profile = ({ dev }) => {
	return (
		<>
			<Avatar src={""} />
			<Bio>{""} bio</Bio>
			<Properties dev={dev} />
		</>
	);
};

export default Profile;
