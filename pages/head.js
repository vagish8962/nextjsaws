import React from "react";
import NextHead from "next/head";

const Head = ({ title, description, children }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    {children}
    <meta name="description" content={description || ""} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
      key="viewport"
    />
  </NextHead>
);

export default Head;
