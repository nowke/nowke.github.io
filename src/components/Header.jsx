import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Github from "src/assets/images/github.svg";
import LinkedIn from "src/assets/images/linkedin.svg";
import Twitter from "src/assets/images/twitter.svg";

const Navbar = styled.nav`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 6px 20px;
  background: rgba(255, 255, 255, 0.98);

  @media (min-width: 992px) {
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    flex-wrap: nowrap;
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

`;

const TitleHeading = styled.h1`
  font-family: "Noto Serif", serif;
  font-size: 1.9rem;
  margin: 0;
  padding: 0.1em 0;
  font-weight: 400;
  text-align: left;
`;

const Title = ({ children }) => (
  <Link to="/" style={{ textDecoration: 'none', color: 'unset' }}>
    <TitleHeading>{children}</TitleHeading>
  </Link>
);

const SocialContainer = styled.div`
  align-items: center;
  flex-grow: 1;
  flex-basis: auto;
  display: flex;
`;

const NavbarItemContainer = styled.ul`
  display: flex;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left: auto !important;
  flex-direction: row;
`;

const NavbarItem = styled.li`
  font-size: 0.9rem;
`;

const Social = styled.img`
  width: 1.4em;
  height: 1.6em;
  padding: 0 0.7em;
  box-sizing: content-box;
`;

const SocialLink = ({ src, link }) => (
  <NavbarItem>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Social src={src} />
    </a>
  </NavbarItem>
);

export default () => {
  return (
    <Navbar>
      <Container>
        <Title>nowke</Title>
        <SocialContainer>
          <NavbarItemContainer>
            <SocialLink src={Github} link="https://github.com/nowke" />
            <SocialLink
              src={LinkedIn}
              link="https://www.linkedin.com/in/nowke/"
            />
            <SocialLink src={Twitter} link="https://twitter.com/inowke" />
          </NavbarItemContainer>
        </SocialContainer>
      </Container>
    </Navbar>
  );
};
