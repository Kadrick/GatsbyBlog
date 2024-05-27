import React, { useEffect, useState } from "react";
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
  TagRightIcon,
  TagLeftIcon,
  Divider,
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
  const [tagMap, setTagMap] = useState<Map<string, Post[]>>(
    new Map<string, Post[]>()
  );

  useEffect(() => {
    const newMap = new Map<string, Post[]>();

    for (const post of data.allMdx.edges) {
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

      const dateString = post.node.frontmatter?.date as string;

      let dateFormat = "";
      if (dateString !== "") {
        const postDate = new Date(dateString);
        // prettier-ignore
        dateFormat = `${month[postDate.getMonth()]} ${postDate.getDate().toString()}, ${postDate.getFullYear()}`;
      }

      if ((post.node.frontmatter?.tags?.length || 0) > 0) {
        for (const tag of post.node.frontmatter?.tags || []) {
          if (tag === null) continue;

          if (!newMap.has(tag)) {
            newMap.set(tag, []);
          }

          const arr = newMap.get(tag);
          arr?.push({
            title: post.node.frontmatter?.title || "",
            slug: post.node.frontmatter?.slug || "",
            date: dateFormat,
          });
        }
      } else {
        if (!newMap.has("No Tags")) {
          newMap.set("No Tags", []);
        }

        const arr = newMap.get("No Tags");
        arr?.push({
          title: post.node.frontmatter?.title || "",
          slug: post.node.frontmatter?.slug || "",
          date: dateFormat,
        });
      }
    }

    setTagMap(newMap);
  }, []);

  const [selectedTag, setSelectedTag] = useState<string>("");

  return (
    <Tab tabName={"Tags"} description={""}>
      <Box mt={"70px"}>
        <Wrap>
          {[...tagMap.keys()].map((value, key) => (
            <WrapItem key={key} onClick={() => setSelectedTag(value)}>
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
      <Divider mt={"20px"} borderWidth={"2px"} borderColor={"red"} />
      <Box w={"100%"}>
        {tagMap.get(selectedTag)?.map((post, idx) => (
          <Box mt={"20px"} key={idx}>
            <Link to={"/post/" + post.slug}>
              <Flex justifyContent={"space-between"}>
                <Text size={"17px"}>{post.title}</Text>
                <Text>{post.date}</Text>
              </Flex>
            </Link>
          </Box>
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
