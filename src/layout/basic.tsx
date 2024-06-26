import React from "react";

import { Box, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Header from "../components/common/header";
import Footer from "../components/common/footer";

import "./font.css";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Basic: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box w={"100vw"}>
      <Header />
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
        style={{ width: "100vw" }}
      >
        <Container minH={"calc(100vh - 150px)"} centerContent maxWidth={"none"}>
          {children}
        </Container>
      </motion.div>
      <Footer />
    </Box>
  );
};

export default Basic;
