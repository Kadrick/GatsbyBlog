import React from "react";
import { Helmet } from "react-helmet";

type SeoProps = {
  title?: string;
  description?: string;
  url?: string;
};

const Seo = ({ title, description, url }: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Seo;
