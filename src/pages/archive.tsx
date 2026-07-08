import React from "react";

import { Link, PageProps, graphql } from "gatsby";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
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
  sortDate: string;
};

const Archive: React.FC<PageProps<AllMDXQuery>> = ({ data }) => {
  const displayTarget = new Map<number, Info[]>();

  data.allMdx.edges.forEach((post) => {
    const dateString = post.node.frontmatter?.date as string;

    if (dateString === null || dateString === "") {
      const info = {
        title: post.node.frontmatter?.title || Math.random().toString(),
        date: "",
        slug: post.node.frontmatter?.slug || Math.random().toString(),
        sortDate: "",
      };

      if (!displayTarget.has(0)) {
        displayTarget.set(0, []);
      }

      displayTarget.get(0)?.push(info);
      return;
    }

    const postDate = new Date(dateString);
    const year = postDate.getFullYear();

    if (!displayTarget.has(year)) {
      displayTarget.set(year, []);
    }

    displayTarget.get(year)?.push({
      title: post.node.frontmatter?.title || Math.random().toString(),
      date: FormatDate(postDate),
      slug: post.node.frontmatter?.slug || Math.random().toString(),
      sortDate: dateString,
    });
  });

  displayTarget.forEach((posts, year) => {
    if (year === 0) return;

    posts.sort(
      (a, b) =>
        new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime(),
    );
  });

  return (
    <Tab
      tabName={"Archive"}
      description={"원숭이가 셰익스피어의 희곡을 칠 확률"}
    >
      <Box w={"100%"} mt={"70px"}>
        {[...displayTarget.entries()]
          .sort((a, b) => b[0] - a[0])
          .map((yearSet, key) => {
            if (yearSet[0] !== 0) {
              return (
                <Box key={key} mb={"48px"}>
                  <Heading size={"md"} mb={"16px"} textAlign={"left"}>
                    {yearSet[0]}
                  </Heading>
                  {yearSet[1].map((info) => (
                    <Box mt={"12px"} key={info.slug}>
                      <Link
                        to={"/post/" + info.slug}
                        style={{ display: "block", width: "100%" }}
                      >
                        <Flex
                          w={"100%"}
                          alignItems={"flex-start"}
                          justifyContent={"space-between"}
                          gap={4}
                        >
                          <Text
                            flex={1}
                            minW={0}
                            fontSize={"17px"}
                            textAlign={"left"}
                            lineHeight={"1.5"}
                          >
                            {info.title}
                          </Text>
                          <Text
                            flexShrink={0}
                            whiteSpace={"nowrap"}
                            color={"gray.500"}
                            fontSize={"sm"}
                            pt={"2px"}
                          >
                            {info.date}
                          </Text>
                        </Flex>
                      </Link>
                    </Box>
                  ))}
                </Box>
              );
            }
          })}

        {displayTarget.has(0) && (
          <Box w={"100%"}>
            <Heading size={"md"} mb={"16px"} textAlign={"left"}>
              Unknown
            </Heading>
            {displayTarget.get(0)?.map((info) => (
              <Box mt={"12px"} key={info.slug}>
                <Link
                  to={"/post/" + info.slug}
                  style={{ display: "block", width: "100%" }}
                >
                  <Text fontSize={"17px"} textAlign={"left"} lineHeight={"1.5"}>
                    {info.title}
                  </Text>
                </Link>
              </Box>
            ))}
          </Box>
        )}
      </Box>
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
