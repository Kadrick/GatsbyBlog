import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

type CodeAccordionProps = {
  title: string;
  children: React.ReactNode;
};

const CodeAccordion: React.FC<CodeAccordionProps> = ({ title, children }) => (
  <Accordion allowToggle reduceMotion>
    <AccordionItem
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      mb={2}
      overflow="hidden"
    >
      <h4>
        <AccordionButton py={2} minH="auto" _expanded={{ bg: "gray.50" }}>
          <Box flex="1" textAlign="left" fontWeight="medium" fontSize="sm">
            {title}
          </Box>
          <AccordionIcon boxSize={4} />
        </AccordionButton>
      </h4>
      <AccordionPanel p={0} maxH="18rem" overflowY="auto" overflowX="auto">
        <Box
          sx={{
            "& pre": {
              m: 0,
              borderRadius: 0,
              fontSize: "0.78rem",
              lineHeight: "1.45",
            },
            "& [data-ch-codeblock]": { m: 0 },
            "& .ch-codeblock": {
              fontSize: "0.78rem",
              lineHeight: "1.45",
            },
            "& .ch-codeblock .ch-code-scroll": {
              paddingTop: "0.35rem",
              paddingBottom: "0.35rem",
            },
          }}
        >
          {children}
        </Box>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

export default CodeAccordion;
