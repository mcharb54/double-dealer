import React from "react";
import SEO from "../components/SEO";
import Helmet from "react-helmet";
import { css } from "@emotion/core";
import Layout from "../components/layout";

export default () => (
  <Layout>
  <SEO title="Thanks" />
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Double Dealer</title>
        <link rel="canonical" href="https://thedoubledealer.com" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
          text-align: center;
          background-color: inherit;
          color: inherit;
        `}
      >
      Thank you for signing up!
      </h1>
      <br />
      <br />
      <p>We'll be in touch.</p>
    </div>
  </Layout>
);
