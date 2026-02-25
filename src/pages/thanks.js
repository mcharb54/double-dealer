import React from "react";
import SEO from "../components/SEO";
import { css } from "@emotion/react";
import Layout from "../components/layout";

export default function ThanksPage() {
  return (
    <Layout>
      <SEO title="Thanks" />
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
          text-align: center;
          color: inherit;
        `}
      >
        Thank you for signing up!
      </h1>
      <br />
      <br />
      <p>We'll be in touch.</p>
    </Layout>
  );
}
