import React, { HTMLProps } from "react";

/*================== Chakra UI =================*/
import {
  Box,
  Divider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";

/*================== Custom UI =================*/

import Quote from "./quote";
import Embed, { EmbedProps } from "./embed";
import Mermaid from "./mermaid";
import CaseStudy from "./case-study";

/*=============================================*/

const MdxComponents = {
  /*================================ Basic Components ==============================*/

  /**======================
   *    Components List: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#components
   *========================**/

  p: (props: HTMLProps<HTMLParagraphElement>) => <Text>{props.children}</Text>,

  h2: (props: HTMLProps<HTMLHeadingElement>) => (
    <Heading as={"h2"} id={props.id} pt={"20px"} pb={"20px"} size={"xl"}>
      {props.children}
    </Heading>
  ),
  h3: (props: HTMLProps<HTMLHeadingElement>) => (
    <Heading as={"h3"} id={props.id} pt={"20px"} pb={"20px"} size={"lg"}>
      {props.children}
    </Heading>
  ),
  h4: (props: HTMLProps<HTMLHeadingElement>) => (
    <Heading as={"h4"} id={props.id} pt={"15px"} pb={"15px"} size={"md"}>
      {props.children}
    </Heading>
  ),
  h5: (props: HTMLProps<HTMLHeadingElement>) => (
    <Heading as={"h5"} id={props.id} pt={"10px"} pb={"10px"} size={"md"}>
      {props.children}
    </Heading>
  ),
  h6: (props: HTMLProps<HTMLHeadingElement>) => (
    <Heading as={"h6"} id={props.id} size={"md"}>
      {props.children}
    </Heading>
  ),

  hr: (props: HTMLProps<HTMLHRElement>) => (
    <Divider mt={"15px"} mb={"15px"} borderColor={"gray"} />
  ),

  a: (props: HTMLProps<HTMLAnchorElement>) => (
    <Link
      href={props.href}
      target={"_blank"}
      color={"red"}
      textDecorationLine={"underline"}
    >
      {props.children}
    </Link>
  ),

  blockquote: Quote,
  ul: (props: HTMLProps<HTMLElement>) => (
    <UnorderedList>{props.children}</UnorderedList>
  ),
  ol: (props: HTMLProps<HTMLElement>) => (
    <OrderedList>{props.children}</OrderedList>
  ),
  li: (props: HTMLProps<HTMLElement>) => <ListItem>{props.children}</ListItem>,

  table: (props: HTMLProps<HTMLTableElement>) => (
    <Box my={6} overflowX={"auto"}>
      <TableContainer whiteSpace={"normal"}>
        <Table variant={"simple"} size={"md"}>
          {props.children}
        </Table>
      </TableContainer>
    </Box>
  ),
  thead: (props: HTMLProps<HTMLTableSectionElement>) => (
    <Thead bg={"gray.50"}>{props.children}</Thead>
  ),
  tbody: (props: HTMLProps<HTMLTableSectionElement>) => (
    <Tbody>{props.children}</Tbody>
  ),
  tr: (props: HTMLProps<HTMLTableRowElement>) => <Tr>{props.children}</Tr>,
  th: (props: HTMLProps<HTMLTableCellElement>) => (
    <Th whiteSpace={"nowrap"} py={4} px={5}>
      {props.children}
    </Th>
  ),
  td: (props: HTMLProps<HTMLTableCellElement>) => (
    <Td py={4} px={5} lineHeight={"1.75"}>
      {props.children}
    </Td>
  ),

  // text
  strong: (props: HTMLProps<HTMLElement>) => (
    <Text as={"b"}>{props.children}</Text>
  ),
  em: (props: HTMLProps<HTMLElement>) => (
    <Text as={"em"}>{props.children}</Text>
  ),

  /*================================ Custom Components ==============================*/

  Delete: (props: HTMLProps<HTMLElement>) => (
    <Text as={"del"}>{props.children}</Text>
  ),

  Embed: (props: HTMLProps<HTMLElement> & EmbedProps) => <Embed {...props} />,

  Mermaid,
  CaseStudy,
};

export default MdxComponents;
