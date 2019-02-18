import React from "react";
import { graphql } from "gatsby";

import Layout from "src/components/Layout";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <br />
      <div className="markdown-body">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <br />
      <br />
      <br />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
