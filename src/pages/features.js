import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <div>
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
      <br />
      <br />
      <Link
        to={`/features2`}
        css={css`
          display: inline-block;
          font-style: normal;
        `}
      >
        <h5
          css={css`
            color: gray;
          `}
        >Dealer's choice</h5>
      </Link>
      <br />
      <br />
    </div>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            writer
          }
        }
      }
    }
  }
`;
