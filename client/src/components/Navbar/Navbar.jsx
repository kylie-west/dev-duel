import {
	Nav,
	NavbarContainer,
	Menu,
	MenuItem,
	MenuLink
} from "./Navbar.styles";
const Navbar = () => {
	return (
		<Nav>
			<NavbarContainer>
				<Menu>
					<MenuItem>
						<MenuLink
							exact
							to="/"
							activeStyle={{
								transform: "traslateY(3rem)",
								color: "#f0a431",
								zoom: "1.25"
							}}>
							Dev Duel
						</MenuLink>
					</MenuItem>
					<MenuItem>
						<MenuLink
							exact
							to="/inspect"
							activeStyle={{
								transform: "traslateY(3rem)",
								color: "#f0a431",
								zoom: "1.25"
							}}>
							Inspect
						</MenuLink>
					</MenuItem>
					<MenuItem>
						<MenuLink
							exact
							to="/duel"
							activeStyle={{
								transform: "traslateY(3rem)",
								color: "#f0a431",
								zoom: "1.25"
							}}>
							Duel
						</MenuLink>
					</MenuItem>
				</Menu>
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;
