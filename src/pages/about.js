import React from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1
      css={css`
        display: inline-block;
        border-bottom: 1px solid;
        text-align: center;
        background-color: inherit;
        color: inherit;
      `}
    >
      Features
    </h1>
    <p>The Double Dealer is a magazine from the South.</p>
  </Layout>
);
