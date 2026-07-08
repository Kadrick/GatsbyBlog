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
import CodeAccordion from "./code-accordion";

/*=============================================*/

const getNodeText = (node: React.ReactNode): string => {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getNodeText).join("");
  if (React.isValidElement(node)) return getNodeText(node.props.children);
  return "";
};

const MdxComponents = {
  /*================================ Basic Components ==============================*/

  /**======================
   *    Components List: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#components
   *========================**/

  p: (props: HTMLProps<HTMLParagraphElement>) => <Text>{props.children}</Text>,

  h2: (props: HTMLProps<HTMLHeadingElement>) => (
    <Heading as={"h2"} id={props.id} pt={"16px"} pb={"12px"} size={"lg"}>
      {props.children}
    </Heading>
  ),
  h3: (props: HTMLProps<HTMLHeadingElement>) => (
    <Heading as={"h3"} id={props.id} pt={"14px"} pb={"10px"} size={"md"}>
      {props.children}
    </Heading>
  ),
  h4: (props: HTMLProps<HTMLHeadingElement>) => (
    <Heading as={"h4"} id={props.id} pt={"12px"} pb={"8px"} size={"sm"}>
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
    <Box my={3} overflowX={"auto"}>
      <TableContainer whiteSpace={"normal"}>
        <Table variant={"simple"} size={"sm"}>
          {props.children}
        </Table>
      </TableContainer>
    </Box>
  ),
  thead: (props: HTMLProps<HTMLTableSectionElement>) => {
    if (!getNodeText(props.children).trim()) return null;
    return <Thead bg={"gray.50"}>{props.children}</Thead>;
  },
  tbody: (props: HTMLProps<HTMLTableSectionElement>) => (
    <Tbody>{props.children}</Tbody>
  ),
  tr: (props: HTMLProps<HTMLTableRowElement>) => <Tr>{props.children}</Tr>,
  th: (props: HTMLProps<HTMLTableCellElement>) => (
    <Th whiteSpace={"nowrap"} py={2} px={4}>
      {props.children}
    </Th>
  ),
  td: (props: HTMLProps<HTMLTableCellElement>) => (
    <Td py={2} px={4} lineHeight={"1.75"}>
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
  CodeAccordion,
};

export default MdxComponents;
