import React from "react";

import Tab from "../layout/tab";

import { Container } from "@chakra-ui/react";

const Works: React.FC<{}> = ({}) => {
  return (
    <Tab tabName={"Works"} description={"디지털 폐기물 갤러리"}>
      <Container mt={"70px"}></Container>
    </Tab>
  );
};

export default Works;
