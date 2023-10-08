import React from "react";

import Tab from "../layout/tab";

import { Container } from "@chakra-ui/react";

const cv_info = {
  contact: {
    email: "kbk2581553@gmail.com",
    github: "https://github.com/Kadrick",
    linkedIn: "https://www.linkedin.com/in/보권-강-7278a6227/",
  },
  experience: [
    {
      Affiliation: "Markany",
      position: "Developer / 개발자 ",
      start: "2022-04",
      end: "",
      description: "",
    },
  ],
  education: [
    {
      Affiliation: "Kyungpook National University",
      degree: "Bachelor",
      major: "Computer Science",
      start: "2020-03",
      end: "",
      gpa: "yet",
    },
  ],
  skills: {
    experienced: ["C++", "go", "AWS"],
    intermediate: ["C", "DirectX"],
  },
};

const CV: React.FC<{}> = ({}) => {
  return (
    <Tab tabName={"CV"}>
      <Container w={"container.md"} mt={"70px"}></Container>
    </Tab>
  );
};

export default CV;
