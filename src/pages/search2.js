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
      <h5>
        <Link
          to={`/search`}
          css={css`
            display: inline-block;
            font-style: normal;
          `}
        >
          Dealer's choice
        </Link>
      </h5>
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
            path
            title
            backroad
            writer
          }
        }
      }
    }
  }
`;
