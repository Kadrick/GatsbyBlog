import React, { useMemo, useState } from "react";
import { Link, PageProps, graphql } from "gatsby";

import Tab from "../layout/tab";

import {
  Box,
  Icon,
  Wrap,
  WrapItem,
  Text,
  Flex,
  Tag,
  TagLabel,
  TagLeftIcon,
  Divider,
} from "@chakra-ui/react";
import { HiHashtag } from "react-icons/hi";
import { FormatDate } from "../util/format";

type AllMDXQuery = {
  allMdx: {
    edges: {
      node: Queries.Mdx;
    }[];
  };
};

type Post = {
  title: string;
  slug: string;
  date: string;
  sortDate: string;
};

const Tags: React.FC<PageProps<AllMDXQuery>> = ({ data }) => {
  const tagMap = useMemo(() => {
    const newMap = new Map<string, Post[]>();

    for (const post of data.allMdx.edges) {
      const dateString = (post.node.frontmatter?.date as string) || "";
      const dateFormat = dateString ? FormatDate(new Date(dateString)) : "";
      const info: Post = {
        title: post.node.frontmatter?.title || "",
        slug: post.node.frontmatter?.slug || "",
        date: dateFormat,
        sortDate: dateString,
      };

      const tags = post.node.frontmatter?.tags?.filter(Boolean) as
        | string[]
        | undefined;

      if (tags && tags.length > 0) {
        for (const tag of tags) {
          if (!newMap.has(tag)) {
            newMap.set(tag, []);
          }
          newMap.get(tag)?.push(info);
        }
      } else {
        if (!newMap.has("No Tags")) {
          newMap.set("No Tags", []);
        }
        newMap.get("No Tags")?.push(info);
      }
    }

    newMap.forEach((posts) => {
      posts.sort(
        (a, b) =>
          new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime(),
      );
    });

    return newMap;
  }, [data.allMdx.edges]);

  const [selectedTag, setSelectedTag] = useState<string>("");

  return (
    <Tab tabName={"Tags"} description={""}>
      <Box w={"100%"} mt={"70px"}>
        <Wrap>
          {[...tagMap.keys()].map((value) => (
            <WrapItem key={value} onClick={() => setSelectedTag(value)}>
              <Tag
                size={"lg"}
                variant={value === selectedTag ? "solid" : "outline"}
                colorScheme={"red"}
                cursor={"pointer"}
              >
                <TagLeftIcon as={HiHashtag} />
                <TagLabel ml={"-4px"}>{value}</TagLabel>
                <Text ml={"2px"} mr={"-1px"}>
                  {" - " + tagMap.get(value)?.length}
                </Text>
              </Tag>
            </WrapItem>
          ))}
        </Wrap>

        {selectedTag && (
          <>
            <Divider mt={"20px"} borderWidth={"2px"} borderColor={"red"} />
            <Box w={"100%"} mt={"20px"}>
              {tagMap.get(selectedTag)?.map((post) => (
                <Box mt={"12px"} key={post.slug}>
                  <Link
                    to={"/post/" + post.slug}
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
                        {post.title}
                      </Text>
                      <Text
                        flexShrink={0}
                        whiteSpace={"nowrap"}
                        color={"gray.500"}
                        fontSize={"sm"}
                        pt={"2px"}
                      >
                        {post.date}
                      </Text>
                    </Flex>
                  </Link>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>
    </Tab>
  );
};

export default Tags;

export const query = graphql`
  {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            description
            tags
            slug
          }
          id
        }
      }
    }
  }
`;
