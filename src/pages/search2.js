import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import Tuoyal from "../components/tuoyal";

export default ({ data }) => (
  <Tuoyal>
    <div>
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
          text-align: center;
          color: inherit;
        `}
      >
        Search
      </h1>
      <br />
      <br />
      <Link
        to={`/search`}
        css={css`
          display: inline-block;
          font-style: normal;
        `}
      >
        <h5
          css={css`
            color: white;
          `}
        >
          Dealer's choice
        </h5>
      </Link>
      <br />
      <br />
    </div>
  </Tuoyal>
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
