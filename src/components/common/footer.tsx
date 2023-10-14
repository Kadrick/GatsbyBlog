import React from "react";

import { Center, Link, Text } from "@chakra-ui/react";

const Footer: React.FC<{}> = () => {
  return (
    <Center w={"100vw"} h={"100px"}>
      <Text color={"gray"} fontSize={"15px"} textAlign={"center"}>
        Inspired by{" "}
        <Link
          fontWeight={"bold"}
          href={"https://github.com/526avijitgupta/gokarna"}
          target={"_blank"}
        >
          Gokarna
        </Link>{" "}
        & CSS by{" "}
        <Link
          fontWeight={"bold"}
          href={"https://github.com/kasterra"}
          target={"_blank"}
        >
          Kasterra
        </Link>
        <br />©{" "}
        <Link
          fontWeight={"bold"}
          href={"https://github.com/Kadrick"}
          target={"_blank"}
        >
          BoGwon Kang
        </Link>{" "}
        2023, Built with{" "}
        <Link
          fontWeight={"bold"}
          href={"https://www.gatsbyjs.com"}
          target={"_blank"}
        >
          Gatsby
        </Link>
      </Text>
    </Center>
  );
};

export default Footer;
