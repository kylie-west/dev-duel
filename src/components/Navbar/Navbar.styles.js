import styled from "styled-components";
import Link from "next/link";

export const Nav = styled.nav`
  font-size: 18px;
  height: 100%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  background-color: #000;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;

  &:hover {
    color: #f0a431;
  }

  &.dev-duel {
    font-family: Staatliches;
    font-size: 24px;
  }
`;
