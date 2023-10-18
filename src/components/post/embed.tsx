import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Text,
  Image,
  Link,
  CardBody,
  Center,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { Spotify } from "react-spotify-embed";
import axios from "axios";

type MetaData = {
  title?: string;
  description?: string;
  image?: string;
};

export type EmbedProps = {
  type?: "youtube" | "twitter" | "spotify" | "normal";
  link: string;
};

const Embed: React.FC<EmbedProps> = ({ type, link }) => {
  switch (type) {
    case "spotify":
      return (
        <>
          <Spotify allow="" wide link={link}></Spotify>
        </>
      );
    case "youtube":
      const [vid] = link.split("/").slice(-1);

      return (
        <Box>
          <iframe
            width="100%"
            height={300}
            src={`https://www.youtube.com/embed/${vid}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Box>
      );

    case "normal":
      const [error, setError] = useState<boolean>(false);
      const [loading, setLoading] = useState<boolean>(true);
      const [metaData, setMetaData] = useState<MetaData>({ title: link });

      const getMetaData = async () => {
        try {
          const url = "https://corsproxy.io/?" + encodeURIComponent(link);
          const resp = await axios({ method: "get", url: url });
          const data = await resp.data;

          const parser = new DOMParser();
          const doc = parser.parseFromString(data, "text/html");

          const title = doc.querySelector("title")?.textContent || "";
          const description =
            doc
              .querySelector('meta[property="og:description"]')
              ?.getAttribute("content") || "";
          const image =
            doc
              .querySelector('meta[property="og:image"]')
              ?.getAttribute("content") || "";

          setMetaData({ title, description, image });
        } catch (error) {
          console.log(error);
        }
        return;
      };

      useEffect(() => {
        getMetaData();
      }, []);

      return (
        <Box>
          {metaData ? (
            <Link href={link} target={"_blank"}>
              <Card direction={"row"} align={"center"}>
                <CardBody w={"70%"} justifyContent={"center"}>
                  <Heading size={"sm"} maxH={"80px"}>
                    {metaData.title}
                  </Heading>

                  {metaData.description && (
                    <Box>
                      <Text
                        maxH={"80px"}
                        whiteSpace={"nowrap"}
                        textOverflow={"ellipsis"}
                        overflow={"hidden"}
                      >
                        {metaData.description}
                      </Text>
                    </Box>
                  )}
                </CardBody>
                {metaData.image && (
                  <Box w={"30%"} h={"100%"}>
                    <Image
                      objectFit={"fill"}
                      w={"100%"}
                      h={"100%"}
                      src={metaData.image}
                      alt={"Open-graph Image"}
                    />
                  </Box>
                )}
              </Card>
            </Link>
          ) : (
            <Card>
              <CardBody>
                <Center>
                  <Link>{link}</Link>
                </Center>
              </CardBody>
            </Card>
          )}
        </Box>
      );

    default:
      break;
  }
};

export default Embed;
