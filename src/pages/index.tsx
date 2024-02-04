import * as React from "react";
import type { PageProps } from "gatsby";
import Basic from "../layout/basic";
import { Center, Heading, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import Seo from "../layout/seo";

type IconProps = {
  icon: IconType;
  link: string;
};

const SocialIcon: React.FC<IconProps> = ({ icon, link }) => {
  return (
    <Link href={link} target={"_blank"} ml={"7px"} mr={"7px"}>
      <Icon w={"24px"} h={"24px"} as={icon} />
    </Link>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Basic>
      <Seo
        title={"가짜 개발자 이야기"}
        description={"변방 개발자 블로그"}
        url={"/"}
      />
      <VStack
        w={"100vw"}
        minH={"calc(100vh - 150px)"}
        justifyContent={"center"}
      >
        <VStack h={"100px"} justifyContent={"space-around"}>
          <Heading as={"h2"}>가짜 개발자 이야기</Heading>
          <Text>
            회사 다니기 싫다 / 돈 벌고 싶다 / 쉬고 싶다 / 시간 참 빠르다
          </Text>
        </VStack>
        <Center h={"70px"}>
          <SocialIcon
            icon={HiOutlineMail}
            link={"mailto:kbk2581553@gmail.com"}
          />
          <SocialIcon
            icon={BiLogoLinkedinSquare}
            link={"https://www.linkedin.com/in/보권-강-7278a6227/"}
          />
          <SocialIcon icon={FiGithub} link={"https://github.com/Kadrick"} />
        </Center>
      </VStack>
    </Basic>
  );
};

export default IndexPage;
