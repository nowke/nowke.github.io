import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";

import Layout from "../components/Layout";
import "../styles.css";

const SubHeading = styled.h2`
  color: #000000;
  text-align: left;
  font-size: 1.2em;
  font-weight: 700;
  margin: 0;
`;

const ProjectItem = styled.div`
  background: #ffffff;
  height: 100%;
  padding: 0.5em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const ItemHeading = ({ className, link, title }) => (
  <Link to={link} className={className}>
    {title}
  </Link>
);

const StyledHeading = styled(ItemHeading)`
  text-decoration: none;
  font-size: 1.3em;
  font-weight: 400;
  text-align: left;
  color: #000000;
  margin: 0;

  :hover {
    color: #0076ff;
  }
`;

const Description = styled.p`
  font-size: 0.9em;
  text-align: left;
  font-weight: 400;
  color: #000000;
  margin: 4px 0;
  line-height: 1.5;
`;

const StyledCol = styled(Col)`
  margin: 8px 0;
`;

export default () => (
  <Layout>
    <SubHeading>Notebooks</SubHeading>
    <Grid style={{ padding: 0, width: "unset" }}>
      <Row>
        <StyledCol lg={4} md={6} sm={6} xs={12}>
          <ProjectItem>
            <StyledHeading link="/stats/" title="Statistics and Probability" />
            <Description>
              Basics of probability, descriptive statistics, Distributions,
              Intervals, Covariance and correlation
            </Description>
          </ProjectItem>
        </StyledCol>
        <StyledCol lg={4} md={6} sm={6} xs={12}>
          <ProjectItem>
            <StyledHeading
              link="/stats-kaggle/"
              title="Basic Statistics using IPL Data"
            />
            <Description>
              Learn Quantitative Data, distributions, bivariate data using
              Kaggle's IPL Cricket data (2008-2018)
            </Description>
          </ProjectItem>
        </StyledCol>
      </Row>
    </Grid>
    <br />
    <SubHeading>Projects</SubHeading>
    <Grid style={{ padding: 0, width: "unset" }}>
      <Row>
        <StyledCol lg={4} md={6} sm={6} xs={12}>
          <ProjectItem>
            <StyledHeading
              link="/realtime-dashboard"
              title="Real-time dashboard"
            />
            <Description>
              A lightweight scalable real-time dashboard using React, GraphQL
              subscriptions and Redis PubSub
            </Description>
          </ProjectItem>
        </StyledCol>
      </Row>
    </Grid>
  </Layout>
);
