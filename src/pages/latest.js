import React from "react";
import SEO from "../components/SEO";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";

export default function LatestPage({ data }) {
  return (
    <Layout>
      <SEO title="Latest" />
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
        <br />
        <br />
      </div>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
                &:hover {
                  text-decoration: underline;
                  color: inherit;
                  text-decoration-color: #0080c0;
                }
              `}
            >
              <h2 css={css`margin-bottom: ${rhythm(1 / 4)};`}>
                {node.frontmatter.title}
              </h2>
            </Link>
            <p css={css`color: grey;`}>
              By {node.frontmatter.writer} — {node.frontmatter.date}
            </p>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            writer
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
