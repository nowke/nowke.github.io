import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import unified from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrism from "@mapbox/rehype-prism";
import html from "rehype-stringify";

import Layout from "src/components/Layout";

export default ({ data }) => {
  const content = data.github.repository.object.text;
  const contentParsed = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(html)
    .processSync(content).contents;
  return (
    <Layout>
      <Helmet>
        <title>SICP Programs | nowke</title>
        <meta name="description" content="SICP Programs and Exercises" />
        <meta property="og:title" content="SICP Programs" />
        <meta property="og:description" content="SICP Programs and Exercises" />
      </Helmet>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: contentParsed }}
      />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export const query = graphql`
  query($expr: String!) {
    github {
      repository(owner: "nowke", name: "hodor") {
        object(expression: $expr) {
          ... on GitHub_Blob {
            text
          }
        }
      }
    }
  }
`;
