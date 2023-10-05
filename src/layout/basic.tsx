import React from "react";

import { Box, Container } from "@chakra-ui/react";

import Header from "../components/common/header";
import Footer from "../components/common/footer";

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Basic: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Container maxW={"container.md"} minH={"calc(100vh - 150px)"}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Basic;
