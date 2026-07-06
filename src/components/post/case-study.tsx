import React from "react";
import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react";

type CaseSectionProps = {
  label: string;
  children: React.ReactNode;
};

const CaseSection: React.FC<CaseSectionProps> = ({ label, children }) => (
  <Box>
    <Text fontWeight={"semibold"} color={"gray.800"} mb={2}>
      {label}
    </Text>
    <Box color={"gray.600"} lineHeight={"1.8"}>
      {children}
    </Box>
  </Box>
);

export type CaseStudyProps = {
  id: string;
  title: string;
  status?: "resolved" | "in-progress";
  problem: React.ReactNode;
  action: React.ReactNode;
  application?: React.ReactNode;
  result: React.ReactNode;
};

const CaseStudy: React.FC<CaseStudyProps> = ({
  id,
  title,
  problem,
  action,
  application,
  result,
}) => (
  <Box
    id={id}
    as={"section"}
    my={12}
    scrollMarginTop={"90px"}
  >
    <Heading as={"h3"} size={"md"} mb={6} lineHeight={"1.5"} fontWeight={"semibold"}>
      {title}
    </Heading>
    <VStack align={"stretch"} spacing={5}>
      <CaseSection label={"Problem"}>{problem}</CaseSection>
      <CaseSection label={"Action"}>{action}</CaseSection>
      {application && (
        <CaseSection label={"Application"}>{application}</CaseSection>
      )}
      <CaseSection label={"Result"}>{result}</CaseSection>
    </VStack>
    <Divider mt={10} borderColor={"gray.200"} />
  </Box>
);

export default CaseStudy;
