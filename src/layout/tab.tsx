import React from "react";

import Basic from "./basic";
import { Container, Heading, Text } from "@chakra-ui/react";
import Seo from "./seo";
import { TAB_CONTENT_MAX_W } from "./tab-content-width";

type LayoutProps = {
  tabName: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
};

const Tab: React.FC<LayoutProps> = ({ tabName, description, children }) => {
  return (
    <Basic>
      <Seo title={tabName} description={description} url={"/" + tabName.toLowerCase()}/>
      <Container pt={"50px"} centerContent>
        <Heading as={"h2"}>{tabName}</Heading>
        {description && <Text>{description}</Text>}
      </Container>
      <Container
        maxW={TAB_CONTENT_MAX_W}
        w={"100%"}
        mx={"auto"}
        px={{ base: 4, md: 6, lg: 8 }}
        pb={{ base: 8, md: 10 }}
      >
        {children}
      </Container>
    </Basic>
  );
};

export default Tab;
