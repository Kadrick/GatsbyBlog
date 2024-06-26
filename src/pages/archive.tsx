import React from "react";

import { Link, PageProps, graphql } from "gatsby";

import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Tab from "../layout/tab";
import { FormatDate } from "../util/format";

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

const Archive: React.FC<PageProps<AllMDXQuery>> = ({ data }) => {
  let displayTarget = new Map<number, Info[]>();

  data.allMdx.edges.map((post, idx) => {
    const dateString = post.node.frontmatter?.date as string;

    if (dateString === null || dateString === "") {
      const info = {
        title: post.node.frontmatter?.title || Math.random().toString(),
        date: "",
        slug: post.node.frontmatter?.slug || Math.random().toString(),
      };

      if (!displayTarget.has(0)) {
        displayTarget.set(0, []);
      }

      const prevData = displayTarget.get(0);
      prevData?.push(info);

      return;
    }

    const postDate = new Date(dateString);

    if (!displayTarget.has(postDate.getFullYear())) {
      displayTarget.set(postDate.getFullYear(), []);
    }

    const dateFormat = FormatDate(postDate);

    const prevData = displayTarget.get(postDate.getFullYear());
    prevData?.push({
      title: post.node.frontmatter?.title || Math.random().toString(),
      date: dateFormat,
      slug: post.node.frontmatter?.slug || Math.random().toString(),
    });
  });

  return (
    <Tab
      tabName={"Archive"}
      description={"원숭이가 셰익스피어의 희곡을 칠 확률"}
    >
      <Container>
        {[...displayTarget.entries()].map((yearSet, key) => {
          if (yearSet[0] !== 0) {
            return (
              <Box mt={"70px"} key={key}>
                <Heading>{yearSet[0]}</Heading>
                {yearSet[1].map((info, key) => (
                  <Box mt={"20px"} key={key}>
                    <Link to={"/post/" + info.slug}>
                      <Flex justifyContent={"space-between"}>
                        <Text size={"17px"}>{info.title}</Text>
                        <Text>{info.date}</Text>
                      </Flex>
                    </Link>
                  </Box>
                ))}
              </Box>
            );
          }
        })}

        {displayTarget.has(0) && (
          <Box w={"100%"} mt={"70px"}>
            <Heading>Unknown</Heading>
            {displayTarget.get(0)?.map((info, key) => (
              <Box mt={"20px"} key={key}>
                <Link to={"/post/" + info.slug}>
                  <Flex>
                    <Text w={"500px"} size={"17px"}>
                      {info.title}
                    </Text>
                  </Flex>
                </Link>
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Tab>
  );
};

export default Archive;

export const query = graphql`
  {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { draft: { ne: true }, tags: { nin: ["Weekly"] } }
      }
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
