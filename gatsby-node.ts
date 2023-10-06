import path from "path";
import { GatsbyNode } from "gatsby";

type AllMDXQuery = {
  allMdx: {
    edges: {
      node: {
        frontmatter: {
          title: string;
          date: string;
          description: string;
          slug: string;
        };
        internal: {
          contentFilePath: string;
        };
        id: string;
      };
    }[];
  };
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const queryResponse = await graphql<AllMDXQuery>(`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            frontmatter {
              title
              date
              description
              slug
            }
            internal {
              contentFilePath
            }
            id
          }
        }
      }
    }
  `);

  if (queryResponse.errors || queryResponse.data === undefined) {
    console.error(queryResponse.errors);
    throw queryResponse.errors;
  }

  const postArray = queryResponse.data?.allMdx.edges;

  // Post Page

  for (const post of postArray.values()) {
    createPage({
      path: path.join("post", post.node.frontmatter.slug),
      component:
        path.resolve("./src/layout/post.tsx") +
        `?__contentFilePath=${post.node.internal.contentFilePath}`,
      context: { id: post.node.id },
    });
  }
};
