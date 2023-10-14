import type { GatsbyConfig } from "gatsby";
import { remarkCodeHike } from "@code-hike/mdx";
import Ayu from "./ayu-mirage.json";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `DEVLOG`,
    author: `BoGwon Kang`,
    description: "Just personal blog",
    siteUrl: `https://kadrick.github.io/GatsbyBlog/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: ["gatsby-remark-images"],
        mdxOptions: {
          remarkPlugins: [
            [
              remarkCodeHike,
              {
                theme: Ayu,
                showCopyButton: true,
              },
            ],
          ],
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts/",
      },
      __key: "posts",
    },
  ],
  flags: {
    DEV_SSR: true,
  },
};

export default config;
