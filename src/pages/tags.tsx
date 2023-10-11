import React, { useState } from "react";
import { PageProps, graphql } from "gatsby";

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
  TagRightIcon,
  TagLeftIcon,
} from "@chakra-ui/react";
import { HiHashtag } from "react-icons/hi";

type AllMDXQuery = {
  allMdx: {
    edges: {
      node: Queries.Mdx;
    }[];
  };
};

type Post = {
  title?: string;
  slug?: string;
  date?: string;
};

const Tags: React.FC<PageProps<AllMDXQuery>> = ({ data }) => {
  const tagMap = new Map<string, Post[]>();

  data.allMdx.edges.map((post, idx) => {
    if ((post.node.frontmatter?.tags?.length || 0) > 0) {
      for (const tag of post.node.frontmatter?.tags || []) {
        if (tag === null) continue;

        if (!tagMap.has(tag)) {
          tagMap.set(tag, []);
        }

        const arr = tagMap.get(tag);
        arr?.push({
          title: post.node.frontmatter?.title || "",
          slug: post.node.frontmatter?.slug || "",
          date: post.node.frontmatter?.date || "",
        });
      }
    } else {
      if (!tagMap.has("No Tags")) {
        tagMap.set("No Tags", []);
      }

      const arr = tagMap.get("No Tags");
      arr?.push({
        title: post.node.frontmatter?.title || "",
        slug: post.node.frontmatter?.slug || "",
        date: post.node.frontmatter?.date || "",
      });
    }
  });

  const [selectedTag, setSelectedTag] = useState<string>("");

  return (
    <Tab tabName={"Tags"} description={""}>
      <Box mt={"70px"}>
        <Wrap>
          {[...tagMap.keys()].map((value, key) => (
            <WrapItem key={"key"} onClick={() => setSelectedTag(value)}>
              <Tag
                size={"lg"}
                key={key}
                variant={value === selectedTag ? "solid" : "outline"}
                colorScheme={"red"}
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
      </Box>
      <Box>
        {data.allMdx.edges
          .filter((value) =>
            value.node.frontmatter?.tags?.includes(selectedTag)
          )
          .map((post, idx) => (
            <Box>{post.node.frontmatter?.title}</Box>
          ))}
      </Box>
    </Tab>
  );
};

export default Tags;

export const query = graphql`
  {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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
