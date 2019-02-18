import React from "react";
import styled from "styled-components";

import Github from "src/assets/images/github.svg";
import LinkedIn from "src/assets/images/linkedin.svg";
import Twitter from "src/assets/images/twitter.svg";

const Header = styled.header`
  height: 6em;
  background: #ffffff;
  color: #000000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const H1 = styled.h1`
  font-size: 2.45rem;
  margin: 0;
  padding: 0.1em 0;
  font-weight: 400;
  text-align: center;
`;

const SocialContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Social = styled.img`
  width: 1.4em;
  height: 1.6em;
  padding: 0 0.4em;
`;

const SocialLink = ({ src, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <Social src={src} />
  </a>
);

export default () => {
  return (
    <Header>
      <H1>~ nowke ~</H1>
      <SocialContainer>
        <SocialLink src={Github} link="https://github.com/nowke" />
        <SocialLink src={LinkedIn} link="https://www.linkedin.com/in/nowke/" />
        <SocialLink src={Twitter} link="https://twitter.com/inowke" />
      </SocialContainer>
    </Header>
  );
};
