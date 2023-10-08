import React from "react";

import Basic from "./basic";
import { Container, Heading } from "@chakra-ui/react";

type LayoutProps = {
  tabName: string;
  children: React.ReactNode | React.ReactNode[];
};

const Tab: React.FC<LayoutProps> = ({ tabName, children }) => {
  return (
    <Basic>
      <Container pt={"50px"} centerContent>
        <Heading as={"h2"}>{tabName}</Heading>
      </Container>
      <Container>{children}</Container>
    </Basic>
  );
};

export default Tab;
