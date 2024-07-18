import React, { useEffect } from "react";

import Tab from "../layout/tab";

import {
  Card,
  CardBody,
  Container,
  Wrap,
  WrapItem,
  Text,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import Image from "../components/common/image";

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
    slug: "/work/weekly",
    cover: "works/weekly.jpg",
    title: "Weekly",
    description: "주간지를 적는 사람들은 괴물이 아니었을까?",
  },
  {
    id: 2,
    slug: "/work/errors",
    cover: "works/error.png",
    title: "Error 정리함",
    description: "아무튼 돌아가니 좋았쓰!",
  },
];

const Works: React.FC<{}> = () => {
  return (
    <Tab tabName={"Works"} description={"디지털 폐기물 갤러리"}>
      <Container mt={"70px"}>
        <Wrap justify={"center"} spacing={"20px"}>
          {Items.map((item, idx) => {
            return (
              <WrapItem w={"45%"} key={item.id}>
                <Link to={item.slug}>
                  <Card mb={"10px"}>
                    <Image
                      src={item.cover}
                      style={{ width: "100%", "aspect-ratio": "1" }}
                    />
                  </Card>
                  <VStack>
                    <Heading size={"md"}>{item.title}</Heading>
                    <Text>{item.description}</Text>
                  </VStack>
                </Link>
              </WrapItem>
            );
          })}
        </Wrap>
      </Container>
    </Tab>
  );
};

export default Works;
