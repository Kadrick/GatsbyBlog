import React from "react";

import { Link, PageProps, graphql } from "gatsby";

import { Box, Container, Text } from "@chakra-ui/react";
import Tab from "../layout/tab";

type AllMDXQuery = {
  allMdx: {
    edges: {
      node: Queries.Mdx;
    }[];
  };
};

const Archive: React.FC<PageProps<AllMDXQuery>> = ({ data }) => {
  return (
    <Tab tabName={"Archive"}>
      <Container h={"fit-content"}>
        {data.allMdx.edges.map((value, key) => (
          <div key={key}>
            <Link to={"/post/" + value.node.frontmatter?.slug}>
              <Text>{value.node.frontmatter?.title}</Text>
            </Link>
          </div>
        ))}
      </Container>
    </Tab>
  );
};

export default Archive;

export const query = graphql`
  {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          frontmatter {
            title
            date
            description
            slug
          }
          id
        }
      }
    }
  }
`;
