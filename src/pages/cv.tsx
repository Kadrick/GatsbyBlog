import React from "react";

import Tab from "../layout/tab";

import {
  Container,
  Heading,
  VStack,
  Text,
  Box,
  Flex,
  Link,
  HStack,
  Icon,
  Wrap,
  ChakraProps,
} from "@chakra-ui/react";

import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationPin } from "react-icons/fa6";
import { IconType } from "react-icons";

type IconProps = {
  icon: IconType;
  link: string;
  text: string;
};

const SocialIcon: React.FC<IconProps> = ({ icon, link, text }) => {
  return (
    <Link href={link} target={"_blank"}>
      <Flex>
        <Text mr={"5px"} textAlign={"right"}>
          {text}
        </Text>
        <Icon w={"24px"} h={"24px"} as={icon} />
      </Flex>
    </Link>
  );
};

type InfoBoxProps = {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  align?: "left" | "right";
};

const InfoBox: React.FC<InfoBoxProps & ChakraProps> = ({
  w,
  title,
  children,
  align = "left",
}) => {
  return (
    <Container w={w}>
      <Heading textAlign={align}>{title}</Heading>
      <VStack mt={"20px"} spacing={"20px"} alignItems={align}>
        {children}
      </VStack>
    </Container>
  );
};

const CVInfo = {
  title: {
    name: "강보권",
    description: "INTP-A / I - 95% / N - 54% / T - 88% /  P - 51% / A - 54%",
  },
  aboutMe: {
    description: [
      "2년차 개발자입니다.",
      "C++와 Golang을 주로 사용합니다.",
      "게임 개발과 네트워킹 기술에 관심이 있습니다.",
    ],
  },
  contact: {
    address: "서울, 대한민국",
    email: "kbk2581553@gmail.com",
    github: "https://github.com/Kadrick",
    linkedIn: "https://www.linkedin.com/in/보권-강-7278a6227/",
  },
  experience: [
    {
      Affiliation: "Markany",
      position: "개발자 / Developer",
      start: "April, 2022",
      end: "",
      description: [
        "산업기능요원으로 복무",
        "워터마크 삽입 및 미디어 스트리밍 시스템 구축",
        "W3C MSE, EME 데모 플레이어 제작",
        "CMS 유지보수",
      ],
    },
  ],
  education: [
    {
      Affiliation: "경북대학교",
      degree: "학사",
      major: "컴퓨터 과학",
      start: "March, 2020",
      end: "",
      gpa: "yet",
    },
  ],
  skills: {
    experienced: ["C++", "Go", "AWS"],
    intermediate: ["C", "DirectX"],
  },
};

const CV: React.FC<{}> = ({}) => {
  return (
    <Tab tabName={CVInfo.title.name} description={CVInfo.title.description}>
      <Container mt={"70px"}>
        <VStack spacing={"70px"}>
          <InfoBox title={"About..."}>
            <VStack alignItems={"start"}>
              {CVInfo.aboutMe.description.map((content, key) => (
                <Text textAlign={"left"} key={key}>
                  {content}
                </Text>
              ))}
            </VStack>
          </InfoBox>

          <InfoBox title={"Contact"}>
            <VStack alignItems={"start"}>
              <SocialIcon
                icon={FaLocationPin}
                link={""}
                text={CVInfo.contact.address}
              />
              <SocialIcon
                icon={FiGithub}
                link={CVInfo.contact.github}
                text={"Github"}
              />
              <SocialIcon
                icon={HiOutlineMail}
                link={"mailto:" + CVInfo.contact.email}
                text={CVInfo.contact.email}
              />
              <SocialIcon
                icon={BiLogoLinkedinSquare}
                link={CVInfo.contact.linkedIn}
                text={"LinkedIn"}
              />
            </VStack>
          </InfoBox>

          <InfoBox title={"Experience"}>
            {CVInfo.experience.map((value, key) => (
              <Box key={key}>
                <Flex justifyContent={"space-between"}>
                  <Flex>
                    <Heading size={"md"} mr={"3px"}>
                      {value.Affiliation}
                    </Heading>
                    <Text>{"- " + value.position}</Text>
                  </Flex>
                  <Text>
                    {value.start} ~ {value.end}
                  </Text>
                </Flex>
                <Box mt={"5px"}>
                  {value.description.map((workDetail, idx) => (
                    <Text pt={"5px"} pl={"10px"} key={idx}>
                      - {workDetail}
                    </Text>
                  ))}
                </Box>
              </Box>
            ))}
          </InfoBox>

          <InfoBox title={"Education"}>
            {CVInfo.education.map((value, key) => (
              <Box key={key}>
                <Flex justifyContent={"space-between"}>
                  <Heading size={"md"} mr={"3px"}>
                    {value.Affiliation}
                  </Heading>

                  <Text>
                    {value.start} ~ {value.end}
                  </Text>
                </Flex>
                <Text p={"4px"}>{`${value.major} - ${value.degree}`}</Text>
              </Box>
            ))}
          </InfoBox>

          <InfoBox title={"Skills"}>
            <Flex justifyContent={"space-between"}>
              <Flex>
                {CVInfo.skills.experienced.map((value, key) => (
                  <Text mr={"10px"} key={key}>
                    {value}
                  </Text>
                ))}
              </Flex>
              <Text>experienced</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Flex>
                {CVInfo.skills.intermediate.map((value, key) => (
                  <Text mr={"10px"} key={key}>
                    {value}
                  </Text>
                ))}
              </Flex>
              <Text>intermediate</Text>
            </Flex>
          </InfoBox>
        </VStack>
      </Container>
    </Tab>
  );
};

export default CV;
