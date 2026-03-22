import React from "react";

import Tab from "../../layout/tab";

import {
  Card,
  CardBody,
  Container,
  Flex,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Link, PageProps, graphql } from "gatsby";
import { FormatDate } from "../../util/format";
import Image from "../../components/common/image";

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
  /** `src/images/` 기준 상대 경로, 예: `works/project.png` */
  cover?: string | null;
};

const Projects: React.FC<PageProps<AllMDXQuery>> = ({ data }) => {
  let displayList: Info[] = [];
  data.allMdx.edges.map((post, _) => {
    const d = FormatDate(new Date(post.node.frontmatter?.date || ""));

    const fm = post.node.frontmatter as Queries.Mdx["frontmatter"] & {
      cover?: string | null;
    };

    displayList.push({
      title: fm?.title || "",
      slug: fm?.slug || "",
      date: d,
      cover: fm?.cover,
    });
  });

  return (
    <Tab tabName={"Projects"} description={"열심히 했어요"}>
      <Container mt={"70px"}>
        <Wrap justify={"center"} spacing={"20px"}>
          {displayList.map((post) => (
            <WrapItem w={"45%"} key={post.slug}>
              <Link to={"/post/" + post.slug}>
                <Card
                  width={"100%"}
                  mb={"10px"}
                  overflow={"hidden"}
                  _hover={{ boxShadow: "md" }}
                  transition={"box-shadow 0.15s ease"}
                >
                  {post.cover ? (
                    <Image
                      src={post.cover}
                      style={{
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : null}
                  <CardBody>
                    <Flex
                      justifyContent={"space-between"}
                      align={"flex-start"}
                      gap={4}
                    >
                      <Text fontSize={"17px"} fontWeight={"medium"}>
                        {post.title}
                      </Text>
                      <Text flexShrink={0} color={"gray.500"} fontSize={"sm"}>
                        {post.date}
                      </Text>
                    </Flex>
                  </CardBody>
                </Card>
              </Link>
            </WrapItem>
          ))}
        </Wrap>
      </Container>
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
