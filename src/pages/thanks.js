import React from "react";
import Helmet from "react-helmet";
import { css } from "@emotion/core";
import Layout from "../components/layout";

export default () => (
  <Layout>
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
        File Uploaded!
      </h1>
      <br />
      <br />
      <h3>Thank you for submitting.</h3>
      <p>Check your inbox for a confirmation email. We'll be in touch.</p>
    </div>
  </Layout>
);
