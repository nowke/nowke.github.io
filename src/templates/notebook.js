import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Layout from "src/components/Layout";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title} | nowke</title>
        <meta name="description" content={post.frontmatter.description || ""} />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.frontmatter.description || ""} />
      </Helmet>
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
        description
      }
    }
  }
`;
