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

const Projects: React.FC<PageProps<AllMDXQuery>> = ({ data }) => {
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
    <Tab tabName={"Projects"} description={"열심히 했어요"}>
      <Box w={"100%"} mt={"70px"}>
        <VStack spacing={4} align={"stretch"}>
          {displayList.map((post) => (
            <HorizontalCard
              key={post.slug}
              to={"/post/" + post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              cover={post.cover}
            />
          ))}
        </VStack>
      </Box>
    </Tab>
  );
};

export default Projects;

export const query = graphql`
  {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { tags: { in: ["Projects"] }, draft: { ne: true } }
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
