import React from "react";
import { Link } from "gatsby";

import { Center, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiHome, FiCode, FiBook, FiTag } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";

type ButtonProps = {
  icon: IconType;
  link: string;
  text: string;
};

const ButtonWithIcon: React.FC<ButtonProps> = ({ icon, link, text }) => {
  return (
    <Link to={link}>
      <Center ml={"5px"} mr={"5px"}>
        <Icon as={icon} m={"2px"} />
        <Text fontSize={"17px"}>{text}</Text>
      </Center>
    </Link>
  );
};

const Header: React.FC<{}> = () => {
  return (
    <Center w={"100vw"} h={"50px"}>
      <ButtonWithIcon icon={FiHome} text={"Home"} link={"/"} />
      <ButtonWithIcon icon={LuUser2} text={"CV"} link={"/cv"} />
      <ButtonWithIcon icon={FiCode} text={"Works"} link={"/"} />
      <ButtonWithIcon icon={FiBook} text={"Archive"} link={"/archive"} />
      <ButtonWithIcon icon={FiTag} text={"Tags"} link={"/tags"} />
    </Center>
  );
};

export default Header;
