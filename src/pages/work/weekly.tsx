import React from "react";

import Tab from "../../layout/tab";

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Link, PageProps, graphql } from "gatsby";
import { FormatDate } from "../../util/format";

type AllMDXQuery = {
  allMdx: {
    edges: {
      node: Queries.Mdx;
    }[];
  };
};

type Info = {
  title: string;
  slug: string;
  date: string;
};

const Weekly: React.FC<PageProps<AllMDXQuery>> = ({ data }) => {
  let displayList: Info[] = [];

  data.allMdx.edges.map((post, _) => {
    const d = FormatDate(new Date(post.node.frontmatter?.date || ""));

    displayList.push({
      title: post.node.frontmatter?.title || "",
      slug: post.node.frontmatter?.slug || "",
      date: d,
    });
  });

  return (
    <Tab
      tabName={"Weekly"}
      description={"sleep(); poop(); work(); eat(); game();"}
    >
      <Container mt={"70px"}>
        {displayList.map((post, idx) => (
          <Box mt={"20px"} key={idx}>
            <Link to={"/post/" + post.slug}>
              <Flex justifyContent={"space-between"}>
                <Text size={"17px"}>{post.title}</Text>
                <Text>{post.date}</Text>
              </Flex>
            </Link>
          </Box>
        ))}
      </Container>
    </Tab>
  );
};

export default Weekly;

export const query = graphql`
  {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: ["Weekly"] }, draft: { ne: true } } }
    ) {
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
