import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import Tuoyal from "../components/tuoyal";

import { rhythm } from "../utils/typography";

export default ({ data }) => (
  <Tuoyal>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Double Dealer</title>
        <link rel="canonical" href="https://thedoubledealer.com" />
        <style>{"body { background-color: black; }"}</style>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
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
                  text-align: center;
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
