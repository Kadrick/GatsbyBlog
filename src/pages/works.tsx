import React from "react";

import Tab from "../layout/tab";
import HorizontalCard from "../components/common/horizontal-card";

import { Box, VStack } from "@chakra-ui/react";

type WorkItem = {
  id: number;
  slug: string;
  cover: string;
  title: string;
  description: string;
};

const Items: WorkItem[] = [
  {
    id: 1,
    slug: "/work/experience",
    cover: "works/projects.png",
    title: "Experience",
    description: "경력 및 기술 과제 정리",
  },
  {
    id: 2,
    slug: "/work/projects",
    cover: "works/projects.png",
    title: "Projects",
    description: "열심히 했어요",
  },
  {
    id: 3,
    slug: "/work/errors",
    cover: "works/error.png",
    title: "Error 정리함",
    description: "아무튼 돌아가니 좋았쓰!",
  },
];

const Works: React.FC = () => {
  return (
    <Tab tabName={"Works"} description={"일한 것들 정리함"}>
      <Box w={"100%"} mt={"70px"}>
        <VStack spacing={4} align={"stretch"}>
          {Items.map((item) => (
            <HorizontalCard
              key={item.id}
              to={item.slug}
              title={item.title}
              description={item.description}
              cover={item.cover}
            />
          ))}
        </VStack>
      </Box>
    </Tab>
  );
};

export default Works;
