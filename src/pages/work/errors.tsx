import React from "react";

import Tab from "../../layout/tab";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
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
  sortDate: string;
};

const Errors: React.FC<PageProps<AllMDXQuery>> = ({ data }) => {
  const displayTarget = new Map<number, Info[]>();

  data.allMdx.edges.forEach((post) => {
    const dateString = post.node.frontmatter?.date as string;

    if (!dateString) {
      const info = {
        title: post.node.frontmatter?.title || "",
        date: "",
        slug: post.node.frontmatter?.slug || "",
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
      title: post.node.frontmatter?.title || "",
      date: FormatDate(postDate),
      slug: post.node.frontmatter?.slug || "",
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
    <Tab tabName={"Errors"} description={"외않되"}>
      <Box w={"100%"} mt={"70px"}>
        {[...displayTarget.entries()]
          .sort((a, b) => b[0] - a[0])
          .map((yearSet) => {
            if (yearSet[0] === 0) return null;

            return (
              <Box key={yearSet[0]} mb={"48px"}>
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

export default Errors;

export const query = graphql`
  {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: ["Errors"] }, draft: { ne: true } } }
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
