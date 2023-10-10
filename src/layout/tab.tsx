import React from "react";

import Basic from "./basic";
import { Container, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

type LayoutProps = {
  tabName: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Tab: React.FC<LayoutProps> = ({ tabName, description, children }) => {
  return (
    <Basic>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
      >
        <Container pt={"50px"} centerContent>
          <Heading as={"h2"}>{tabName}</Heading>
          {description && <Text>{description}</Text>}
        </Container>
        <Container>{children}</Container>
      </motion.div>
    </Basic>
  );
};

export default Tab;
