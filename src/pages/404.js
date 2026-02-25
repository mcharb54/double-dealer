import React from "react";
import SEO from "../components/SEO";
import { css } from "@emotion/react";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <SEO title="404" />
    <h1
      css={css`
        display: inline-block;
        border-bottom: 1px solid;
        text-align: center;
        background-color: inherit;
        color: inherit;
      `}
    >
      404 Error.
    </h1>
    <p>We're sorry, but the page you requested does not exist.</p>
  </Layout>
);
