const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require(`gatsby-remark-relative-images`);

const getParentSlugs = slug => {
  const allDirs = slug.split("/");
  const parentDirs = allDirs.slice(0, allDirs.length - 1);
  return parentDirs.map((_, i) => parentDirs.slice(0, i + 1).join("/"));
};

const createSICPPages = async (graphql, actions) => {
  const { data } = await graphql(`
    query {
      github {
        repository(owner: "nowke", name: "hodor") {
          object(expression: "master:sicp") {
            ... on GitHub_Tree {
              entries {
                name
                type
              }
            }
          }
        }
      }
    }
  `);
  const getChapterData = async name => {
    const chapterData = await graphql(`
      query {
        github {
          repository(owner: "nowke", name: "hodor") {
            object(expression: "master:sicp/${name}") {
              ... on GitHub_Tree {
                entries {
                  name
                  type
                }
              }
            }
          }
        }
      }
    `);
    return chapterData;
  };
  const processEntries = async entries => {
    const promises = entries.map(async entry => {
      if (entry.type === "tree") {
        const chapterData = await getChapterData(entry.name);
        chapterData.data.github.repository.object.entries.forEach(program => {
          if (program.type === "blob") {
            actions.createPage({
              path: `sicp/${entry.name}/${program.name}`,
              component: path.resolve(`./src/templates/sicp.js`),
              context: {
                name: program.name,
                expr: `master:sicp/${entry.name}/${program.name}`
              }
            });
          }
        });
      } else if (entry.type === "blob" && entry.name === "README.md") {
        actions.createPage({
          path: `sicp/`,
          component: path.resolve(`./src/templates/sicp_home.js`),
          context: {
            expr: `master:sicp/README.md`
          }
        });
      }
    });
    await Promise.all(promises);
  };
  await processEntries(data.github.repository.object.entries);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
    fmImagesToRelative(node);
  }
};

exports.createPages = async ({ graphql, actions }) => {
  if (process.env.NETWORK === "1") {
    // GitHub
    await createSICPPages(graphql, actions);
  }

  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/notebook.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug
        }
      });
    });
  });
};
