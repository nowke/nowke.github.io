import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "src/components/Layout";

export default ({ data }) => {
  return (
    <Layout>
      <br />
      <div className="markdown-body">
        <h1>Statistics and Probability</h1>
        <p>
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <React.Fragment>
              <Link to={node.fields.slug}>
                {index + 1}. {node.frontmatter.title}
              </Link>
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
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
