"use client";

import Link from "next/link";
import styled from "styled-components";
import { Container, Button } from "@/components";
import { StyledPage } from "@/pageStyles";

export default function Page() {
  return (
    <StyledPage>
      <Container gap="50px" direction="column">
        <h1>Welcome to Dev Duel.</h1>
        <Container gap="40px">
          <Container gap="15px" direction="column">
            <StyledLink href="/inspect">Inspect</StyledLink>
            <Info className="info">Look up a fellow dev's GitHub Info.</Info>
          </Container>
          <Container gap="15px" direction="column">
            <StyledLink href="/duel">Duel</StyledLink>
            <Info className="info">Pick two devs to go head to head.</Info>
          </Container>
        </Container>
      </Container>
    </StyledPage>
  );
}

const Info = styled.div`
  width: 14ch;
  line-height: 120%;
  color: #6c7782;
`;

const StyledLink = styled(Link)`
  width: 150px;
  padding: 6px 40px;
  border: 2px solid #000;
  border-radius: 10px;
  text-decoration: none;
  font-size: 24px;
  font-family: "Staatliches";
  color: #fff;
  background-color: #000;
  transition: 100ms;

  &:hover {
    color: #000;
    background-color: #fff;
    cursor: pointer;
  }
`;
