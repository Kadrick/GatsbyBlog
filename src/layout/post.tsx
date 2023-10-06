import React from "react";
import { PageProps, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Basic from "./basic";
import { Center, Heading } from "@chakra-ui/react";

const Post: React.FC<PageProps<Queries.Mdx>> = ({ data, children }) => {
  return (
    <Basic>
      <Center pt={"50px"}>
        <Heading>{data.frontmatter?.title}</Heading>
      </Center>
      <MDXProvider>{children}</MDXProvider>
    </Basic>
  );
};

export default Post;

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        tags
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;
