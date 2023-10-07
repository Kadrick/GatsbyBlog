import React, { HTMLProps } from "react";
import "katex/dist/katex.min.css";
import { Container, Text } from "@chakra-ui/react";

const Quote: React.FC<HTMLProps<HTMLElement>> = ({ children }) => {
  return (
    <Container mt={"10px"} mb={"10px"} p={"5px"} bgColor={"gray"}>
      <Text as={"em"}>{children}</Text>
    </Container>
  );
};

export default Quote;
