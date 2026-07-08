import React from "react";

import Tab from "../../layout/tab";
import HorizontalCard from "../../components/common/horizontal-card";

import { Box, VStack } from "@chakra-ui/react";
import { PageProps, graphql } from "gatsby";
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
  description?: string | null;
  cover?: string | null;
};

const Experience: React.FC<PageProps<AllMDXQuery>> = ({ data }) => {
  const displayList: Info[] = data.allMdx.edges.map((post) => {
    const d = FormatDate(new Date(post.node.frontmatter?.date || ""));

    const fm = post.node.frontmatter as Queries.Mdx["frontmatter"] & {
      cover?: string | null;
    };

    return {
      title: fm?.title || "",
      slug: fm?.slug || "",
      date: d,
      description: fm?.description,
      cover: fm?.cover,
    };
  });

  return (
    <Tab tabName={"Experience"} description={"경력 및 기술 과제 정리"}>
      <Box w={"100%"} mt={"70px"}>
        <VStack spacing={4} align={"stretch"}>
          {displayList.map((item) => (
            <HorizontalCard
              key={item.slug}
              to={"/post/" + item.slug}
              title={item.title}
              description={item.description}
              date={item.date}
              cover={item.cover}
            />
          ))}
        </VStack>
      </Box>
    </Tab>
  );
};

export default Experience;

export const query = graphql`
  {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { tags: { in: ["Experience"] }, draft: { ne: true } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            description
            slug
            cover
          }
          id
        }
      }
    }
  }
`;
