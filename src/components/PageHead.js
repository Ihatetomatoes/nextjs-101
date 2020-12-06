import Head from "next/head";
import React from "react";

import {
  author,
  ogImage,
  siteDescription,
  siteName,
  websiteUrl,
} from "@config";

const PageHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content={siteDescription}
        key="descriptionMeta"
      />
      <meta property="og:url" content={websiteUrl} key="url" />
      <meta property="og:type" content="website" key="website" />
      <meta
        property="og:title"
        content={`${siteName} by ${author}`}
        key="title"
      />
      <meta property="og:image" content={ogImage} key="image" />
      <meta
        property="og:description"
        content={siteDescription}
        key="description"
      />
    </Head>
  );
};

export default PageHead;
