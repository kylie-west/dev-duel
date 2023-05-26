import {
  Nav,
  NavbarContainer,
  Menu,
  MenuItem,
  MenuLink,
} from "./Navbar.styles";
const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <Menu>
          <MenuItem>
            <MenuLink href="/" className="dev-duel">
              Dev Duel
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/inspect">Inspect</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/duel">Duel</MenuLink>
          </MenuItem>
        </Menu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
