import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";

export default function SearchPage({ data }) {
  const [query, setQuery] = useState("");

  const allPosts = data.allMarkdownRemark.edges;
  const results = query.trim()
    ? allPosts.filter(({ node }) => {
        const q = query.toLowerCase();
        return (
          node.frontmatter.title.toLowerCase().includes(q) ||
          node.frontmatter.writer.toLowerCase().includes(q) ||
          node.excerpt.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <Layout>
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
          color: inherit;
        `}
      >
        Search
      </h1>
      <br />
      <br />
      <Link to="/search2" css={css`display: inline-block; font-style: normal;`}>
        <h5 css={css`color: #0080c0; text-decoration: underline;`}>
          Dark Theme
        </h5>
      </Link>
      <br />
      <br />
      <input
        type="text"
        placeholder="Search articles, fiction, archives…"
        value={query}
        onChange={e => setQuery(e.target.value)}
        css={css`
          width: 100%;
          padding: 8px 12px;
          font-size: 1rem;
          border: 1px solid #ccc;
          margin-bottom: 24px;
        `}
      />
      {query.trim() && results.length === 0 && (
        <p css={css`color: grey;`}>No results found for "{query}".</p>
      )}
      {results.map(({ node }) => (
        <div key={node.id} css={css`margin-bottom: ${rhythm(1)};`}>
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
          <p css={css`color: grey; margin: 0;`}>
            By {node.frontmatter.writer} — {node.frontmatter.date}
          </p>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 1000
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
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
