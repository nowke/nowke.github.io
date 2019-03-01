import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import unified from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrism from "@mapbox/rehype-prism";
import html from "rehype-stringify";

import Layout from "src/components/Layout";

export default ({ data, pageContext }) => {
  const content = data.github.repository.object.text;
  const contentMd = `
  \`\`\`scheme
  ${content}
  \`\`\`
    `;
  const contentParsed = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(html)
    .processSync(contentMd).contents;
  const type = name => (/^\d/.test(name) ? "Exercise" : "Program");
  const title = `SICP ${type(pageContext.name)} - ${pageContext.name}`;

  return (
    <Layout>
      <Helmet>
        <title>{title} | nowke</title>
        <meta name="description" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
      </Helmet>
      <div className="markdown-body">
        <h1>
          {type(pageContext.name)} <code>{pageContext.name}</code>
        </h1>
        <div dangerouslySetInnerHTML={{ __html: contentParsed }} />
      </div>
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
