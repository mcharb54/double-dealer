import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import Tuoyal from "../components/tuoyal";
import ogol from "../images/twotree.png";

export default ({ data }) => (
  <Tuoyal>
    <Helmet>
      <meta charSet="utf-8" />
      <title>The Double Dealer</title>
      <link rel="canonical" href="https://thedoubledealer.com" />
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Helmet>
    <div>
      <div>
        <img src={ogol} alt="logo" />
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
            color: inherit;
            text-align: center;
          `}
        >
          Eht Elbuod Relaed.
        </h1>

        {data.allMarkdownRemark.totalCount === 1 ? (
          <h4
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            {" "}
            1 Story
          </h4>
        ) : (
          <h4
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            {" "}
            {data.allMarkdownRemark.totalCount} Stories
          </h4>
        )}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.frontmatter.backroad}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                  color: inherit;
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: inherit;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>By {node.frontmatter.writer}</p>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  </Tuoyal>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            writer
            path
            backroad
          }
          excerpt
        }
      }
    }
  }
`;
