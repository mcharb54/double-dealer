import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
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
        Latest
      </h1>
      <h5>
        <Link
          to={`/latest`}
          css={css`
            display: inline-block;
            font-style: normal;
          `}
        >
          Dealer's choice
        </Link>
      </h5>
    </div>
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.frontmatter.backroad}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <h2
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
                color: inherit;
              `}
            >
              {node.frontmatter.title}
            </h2>
          </Link>
          <p
            css={css`
              color: grey;
            `}
          >
            By {node.frontmatter.writer} — {node.frontmatter.date}
          </p>
          <p>{node.excerpt}</p>
        </div>
      ))}
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
