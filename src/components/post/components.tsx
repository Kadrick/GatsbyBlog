import React, { HTMLProps } from "react";

/*================== Chakra UI =================*/
import {
  Divider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

/*================== Custom UI =================*/

import Math, { MathProps } from "./math";
import Quote from "./quote";

/*=============================================*/

const MdxComponents = {
  /*================================ Basic Components ==============================*/

  /**======================
   *    Components List: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#components
   *========================**/

  p: (props: HTMLProps<HTMLParagraphElement>) => <Text>{props.children}</Text>,

  h2: (props: HTMLProps<HTMLHeadingElement>) => (
    <Heading id={props.id} pt={"15px"} pb={"15px"} size={"xl"}>
      {props.children}
    </Heading>
  ),
  h3: (props: HTMLProps<HTMLHeadingElement>) => (
    <Heading id={props.id} pt={"10px"} pb={"10px"} size={"lg"}>
      {props.children}
    </Heading>
  ),
  h4: (props: HTMLProps<HTMLHeadingElement>) => (
    <Heading id={props.id} pt={"6px"} pb={"6px"} size={"md"}>
      {props.children}
    </Heading>
  ),
  h5: (props: HTMLProps<HTMLHeadingElement>) => (
    <Heading id={props.id} pt={"2px"} pb={"2px"} size={"md"}>
      {props.children}
    </Heading>
  ),
  h6: (props: HTMLProps<HTMLHeadingElement>) => (
    <Heading id={props.id} size={"md"}>
      {props.children}
    </Heading>
  ),

  hr: (props: HTMLProps<HTMLHRElement>) => (
    <Divider pt={"2px"} pb={"2px"} borderColor={"gray"} />
  ),

  a: (props: HTMLProps<HTMLAnchorElement>) => (
    <Link href={props.href} target={"_blank"} />
  ),

  blockquote: Quote,
  ul: (props: HTMLProps<HTMLElement>) => (
    <UnorderedList>{props.children}</UnorderedList>
  ),
  ol: (props: HTMLProps<HTMLElement>) => (
    <OrderedList>{props.children}</OrderedList>
  ),
  li: (props: HTMLProps<HTMLElement>) => <ListItem>{props.children}</ListItem>,

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
  Math: (props: HTMLProps<HTMLElement> & MathProps) => <Math {...props} />,
};

export default MdxComponents;