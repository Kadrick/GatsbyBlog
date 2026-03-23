import React from "react";

import Tab from "../../layout/tab";

import {
  Box,
  Card,
  CardBody,
  Container,
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
        <Wrap justify={"center"} spacing={"20px"} align={"stretch"}>
          {displayList.map((post) => (
            <WrapItem
              w={{ base: "100%", sm: "45%" }}
              key={post.slug}
              display={"flex"}
              alignSelf={"stretch"}
            >
              <Link
                to={"/post/" + post.slug}
                style={{ display: "flex", flex: 1, width: "100%" }}
              >
                <Card
                  width={"100%"}
                  flex={1}
                  display={"flex"}
                  flexDirection={"column"}
                  mb={"10px"}
                  overflow={"hidden"}
                  _hover={{ boxShadow: "md" }}
                  transition={"box-shadow 0.15s ease"}
                >
                  <Box
                    aspectRatio={"16 / 9"}
                    w={"100%"}
                    overflow={"hidden"}
                    flexShrink={0}
                    bg={"gray.100"}
                  >
                    {post.cover ? (
                      <Image
                        src={post.cover}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        imgStyle={{ objectFit: "cover" }}
                      />
                    ) : null}
                  </Box>
                  <CardBody
                    flex={1}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    pt={4}
                  >
                    <Box>
                      <Text
                        fontSize={"17px"}
                        fontWeight={"medium"}
                        noOfLines={2}
                        minH={"3.2em"}
                        lineHeight={"1.6"}
                      >
                        {post.title}
                      </Text>
                      <Text
                        mt={2}
                        flexShrink={0}
                        color={"gray.500"}
                        fontSize={"sm"}
                      >
                        {post.date}
                      </Text>
                    </Box>
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
