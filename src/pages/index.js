import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import logo from "../images/icon.png";

export default ({ data }) => (
  <Layout>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Double Dealer</title>
        <link rel="canonical" href="https://thedoubledealer.com" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <div>
        <img src={logo} alt="logo" />
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
            text-align: center;
          `}
        >
          The Double Dealer.
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
              to={node.frontmatter.path}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
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
  </Layout>
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
          }
          excerpt
        }
      }
    }
  }
`;
