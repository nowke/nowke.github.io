import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "src/components/Layout";

export default ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link
          to={node.fields.slug}
        >
          <p>{node.frontmatter.title}</p>
        </Link>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
