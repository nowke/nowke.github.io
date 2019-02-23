import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Header from "./Header";
import { waitForGlobal } from "src/utils";
import "src/assets/styles/github-markdown.css";
import "src/assets/styles/syntax-highlight.css";

const SiteContainer = styled.div`
  min-height: 60vh;
  padding-top: 1.5rem;
  margin-top: 70px;
`;

const BodyContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 576px) {
    max-width: 540px;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

/* eslint-disable no-restricted-globals */
export default class Layout extends React.Component {
  componentDidMount() {
    waitForGlobal("MathJax").then(() => {
      top.MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [["$", "$"], ["\\(", "\\)"]],
          displayMath: [["$$", "$$"], ["[", "]"]],
          processEscapes: true,
          processEnvironments: true,
          skipTags: ["script", "noscript", "style", "textarea", "pre"],
          TeX: {
            equationNumbers: { autoNumber: "AMS" },
            extensions: ["AMSmath.js", "AMSsymbols.js"]
          }
        }
      });
    });
    if (top.MathJax != null) {
      top.MathJax.Hub.Queue(["Typeset", top.MathJax.Hub]);
    }
  }

  componentDidUpdate() {
    if (top.MathJax != null) {
      top.MathJax.Hub.Queue(["Typeset", top.MathJax.Hub]);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Helmet htmlAttributes={{ lang: "en" }}>
          <title>nowke | Navaneesh Kumar</title>
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Serif:400,700"
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
            async
          />
        </Helmet>
        <Header />
        <SiteContainer>
          <BodyContainer>{children}</BodyContainer>
        </SiteContainer>
      </React.Fragment>
    );
  }
}
