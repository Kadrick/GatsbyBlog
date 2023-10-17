import React from "react";

import Basic from "./basic";
import { Container, Heading, Text } from "@chakra-ui/react";

type LayoutProps = {
  tabName: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
};

const Tab: React.FC<LayoutProps> = ({ tabName, description, children }) => {
  return (
    <Basic>
      <Container pt={"50px"} centerContent>
        <Heading as={"h2"}>{tabName}</Heading>
        {description && <Text>{description}</Text>}
      </Container>
      <Container w={"100vw"} centerContent>{children}</Container>
    </Basic>
  );
};

export default Tab;
