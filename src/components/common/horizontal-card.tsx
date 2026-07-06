import React from "react";
import { Box, Card, CardBody, Flex, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import Image from "./image";

type HorizontalCardProps = {
  to: string;
  title: string;
  description?: string | null;
  date?: string;
  cover?: string | null;
};

const imageSize = { base: "120px", md: "128px" };

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  to,
  title,
  description,
  date,
  cover,
}) => (
  <Link to={to} style={{ display: "block", width: "100%" }}>
    <Card
      direction={"row"}
      overflow={"hidden"}
      width={"100%"}
      h={imageSize}
      _hover={{ boxShadow: "md" }}
      transition={"box-shadow 0.15s ease"}
    >
      <Flex
        w={imageSize}
        minW={imageSize}
        h={imageSize}
        flexShrink={0}
        bg={"gray.100"}
        align={"center"}
        justify={"center"}
        overflow={"hidden"}
      >
        {cover ? (
          <Box
            w={"100%"}
            h={"100%"}
            sx={{
              "& .gatsby-image-wrapper": {
                width: "100% !important",
                height: "100% !important",
              },
              "& .gatsby-image-wrapper img": {
                objectFit: "cover !important",
                objectPosition: "center",
              },
            }}
          >
            <Image src={cover} style={{ width: "100%", height: "100%" }} />
          </Box>
        ) : null}
      </Flex>
      <CardBody
        py={2}
        px={{ base: 4, md: 5 }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        overflow={"hidden"}
      >
        <Text
          fontSize={{ base: "15px", md: "16px" }}
          fontWeight={"medium"}
          noOfLines={1}
        >
          {title}
        </Text>
        {description && (
          <Text
            mt={1}
            color={"gray.600"}
            fontSize={"xs"}
            lineHeight={"1.5"}
            noOfLines={2}
          >
            {description}
          </Text>
        )}
        {date && (
          <Text mt={1} color={"gray.500"} fontSize={"xs"} noOfLines={1}>
            {date}
          </Text>
        )}
      </CardBody>
    </Card>
  </Link>
);

export default HorizontalCard;
