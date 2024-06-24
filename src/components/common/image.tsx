import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Image: React.FC<{ src: string; [x: string]: any }> = ({ src, ...x }) => {
  const data: { allFile: { nodes: Queries.File[] } } = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
        nodes {
          relativePath
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const match = useMemo(
    () => data.allFile.nodes.find(({ relativePath }) => src === relativePath),
    [data, src]
  );

  return match?.childrenImageSharp && match?.childrenImageSharp[0] ? (
    <GatsbyImage
      image={match?.childrenImageSharp[0]?.gatsbyImageData}
      alt={"img"}
      {...x}
    />
  ) : null;
};

export default Image;
