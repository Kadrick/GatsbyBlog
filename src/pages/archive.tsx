import React from "react";

import { Link, PageProps, graphql } from "gatsby";

import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Tab from "../layout/tab";

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

    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    // prettier-ignore
    const dateFormat = `${month[postDate.getMonth()]} ${postDate.getDate().toString()}, ${postDate.getFullYear()}`;

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
      <Container w={"container.md"}>
        {[...displayTarget.entries()].map((yearSet, key) => {
          if (yearSet[0] !== 0) {
            return (
              <Box w={"100%"} mt={"70px"} key={key}>
                <Heading>{yearSet[0]}</Heading>
                {yearSet[1].map((info, key) => (
                  <Box mt={"20px"} key={key}>
                    <Link to={"/post/" + info.slug}>
                      <Flex ml={"15px"}>
                        <Text w={"500px"} size={"17px"}>
                          {info.title}
                        </Text>
                        <Text w={"150px"}>{info.date}</Text>
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
                  <Flex ml={"15px"}>
                    <Text w={"500px"} size={"17px"}>
                      {info.title}
                    </Text>
                    <Text w={"150px"}>{info.date}</Text>
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
