import React, { HTMLProps } from "react";
import "katex/dist/katex.min.css";
import { Box, Text } from "@chakra-ui/react";

const Quote: React.FC<HTMLProps<HTMLParagraphElement>> = ({ children }) => {
  return (
    <Box bgColor={"gray.100"} w={"100%"} my={"15px"} px={"15px"} py={"10px"}>
      <Text as={"em"}>{children}</Text>
    </Box>
  );
};

export default Quote;
