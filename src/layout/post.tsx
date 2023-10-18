import React from "react";
import { PageProps, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Basic from "./basic";
import MdxComponents from "../components/post/components";
import "@code-hike/mdx/dist/index.css";
import {
  Container,
  Heading,
  VStack,
  Text,
  Wrap,
  WrapItem,
  Tag,
} from "@chakra-ui/react";
import Seo from "./seo";

const Post: React.FC<
  PageProps<{
    mdx: Queries.Mdx;
    site: { siteMetadata: Queries.SiteSiteMetadata };
  }>
> = ({ data, children }) => {
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

  if (!data.mdx.frontmatter) {
    return (
      <Basic>
        <VStack h={"100%"} justifyContent={"center"}>
          <Heading pb={"10px"}>Something Wrong</Heading>
          <Text>
            죄송합니다, 페이지에 로딩에 문제가 있습니다.
            <br /> 관리자에게 문의 해주세요.
          </Text>
        </VStack>
      </Basic>
    );
  }

  return (
    <Basic>
      <Seo
        title={data.mdx.frontmatter.title || ""}
        url={
          (data.site.siteMetadata.siteUrl || "") + "/post/" + 
          (data.mdx.frontmatter.slug || "")
        }
        description={data.mdx.frontmatter.description || ""}
      />
      <Container pt={"50px"}>
        <Heading>{data.mdx.frontmatter.title}</Heading>
        {
          data.mdx.frontmatter.description && (
            <Text mt={"5px"} color={"gray"}>
              {data.mdx.frontmatter.description}
            </Text>
          )
        }
        {data.mdx.frontmatter.date && (
          <Heading mt={"40px"} size={"18px"} color={"gray"}>
            {month[new Date(data.mdx.frontmatter.date?.toString()).getMonth()]}{" "}
            {new Date(data.mdx.frontmatter.date?.toString()).getDate()}
            {", "}
            {new Date(data.mdx.frontmatter.date?.toString()).getFullYear()}
          </Heading>
        )}
        {data.mdx.frontmatter.tags && (
          <Wrap mt={"20px"}>
            {data.mdx.frontmatter.tags?.map((value, key) => (
              <WrapItem key={key}>
                <Tag>{value}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        )}
      </Container>
      <Container mt={"50px"}>
        <MDXProvider components={MdxComponents}>{children}</MDXProvider>
      </Container>
    </Basic>
  );
};

export default Post;

export const query = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        tags
        description
        slug
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;
