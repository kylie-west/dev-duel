import { List, ListItem, Label, Value } from "./Properties.styles";

export const Properties = ({ dev }) => {
	const propertyNames = [
		["username"],
		["name"],
		["location"],
		["titles"],
		["favorite-language", "fav language"],
		["total-stars", "total stars"],
		["highest-starred", "highest star count"],
		["public-repos", "public repos"],
		["perfect-repos", "perfect repos"],
		["followers"],
		["following"]
	];

	return (
		<List>
			{dev
				? propertyNames.map(property => (
						<ListItem>
							<Label>{property[1] || property[0]} </Label>
							{property[0] === "titles" ? (
								<Value>{dev["titles"].join(", ")}</Value>
							) : (
								<Value>{dev[property[0]]}</Value>
							)}
						</ListItem>
				  ))
				: null}
		</List>
	);
};

export default Properties;
