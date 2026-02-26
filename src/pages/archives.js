import { useState } from "react";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import Layout from "../components/layout";
import { rhythm } from "../utils/typography";
import Card from "react-bootstrap/Card";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTheme } from "../context/ThemeContext";

export default function ArchivesPage({ data }) {
  const { dark } = useTheme();
  const [query, setQuery] = useState("");

  const cardBorder = dark
    ? "1px solid rgba(255, 255, 255, .875)"
    : "1px solid rgba(0, 0, 0, .125)";

  const inputBg = dark ? "#111" : "#fff";
  const inputFg = dark ? "#fff" : "#000";
  const inputBorder = dark ? "1px solid #666" : "1px solid #ccc";

  // Filter by title or writer
  const q = query.toLowerCase();
  const filtered = data.allMarkdownRemark.edges.filter(({ node }) => {
    if (!q) return true;
    const title = (node.frontmatter.title || "").toLowerCase();
    const writer = (node.frontmatter.writer || "").toLowerCase();
    return title.includes(q) || writer.includes(q);
  });

  // Group by issue
  const groups = {};
  filtered.forEach(({ node }) => {
    const issue = node.frontmatter.issue || "Uncategorized";
    if (!groups[issue]) {
      groups[issue] = { issueDate: node.frontmatter.issue_date, items: [] };
    }
    groups[issue].items.push(node);
  });

  // Sort issues by date of their first item
  const sortedIssues = Object.keys(groups).sort((a, b) => {
    const dateA = groups[a].items[0]?.frontmatter.rawDate || "";
    const dateB = groups[b].items[0]?.frontmatter.rawDate || "";
    return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
  });

  return (
    <Layout>
      <SEO title="Archives" />
      <Helmet>
        <style type="text/css">{`
          .card {
            font-family: 'Playfair Display', serif;
            background-color: inherit;
            color: inherit;
            width: 100%;
            margin: 0;
            padding: 0;
            border: none;
            border-bottom: ${cardBorder};
          }
        `}</style>
      </Helmet>
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
          text-align: center;
          color: inherit;
        `}
      >
        Archives
      </h1>
      <br />
      <br />
      <h6 css={css`color: inherit;`}>
        From 1921–26, The Double Dealer was operated from New Orleans as, "A
        National Magazine for the South." The magazine featured works from
        literary giants like William Faulkner, Djuna Barnes, Ernest Hemingway,
        Robert Penn Warren, Thornton Wilder and Hart Crane as well as many other
        writers more lost to time.
        <br />
        <br />
        Here in our archives, we will be reviving a selection of those works
        over time.
      </h6>
      <br />

      {/* Search */}
      <div
        css={css`
          margin-bottom: ${rhythm(1)};
        `}
      >
        <input
          type="text"
          placeholder="Search by title or author…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          css={css`
            width: 100%;
            padding: 8px 12px;
            background: ${inputBg};
            color: ${inputFg};
            border: ${inputBorder};
            font-family: 'Playfair Display', serif;
            font-size: 0.95rem;
            outline: none;
            &::placeholder {
              color: ${dark ? "#aaa" : "#888"};
            }
          `}
        />
      </div>

      {filtered.length === 0 && (
        <p css={css`color: inherit; font-style: italic;`}>No results found.</p>
      )}

      {sortedIssues.map((issue) => {
        const { issueDate, items } = groups[issue];
        return (
          <div key={issue} css={css`margin-bottom: ${rhythm(1.5)};`}>
            <h3
              css={css`
                font-family: 'Playfair Display', serif;
                border-bottom: 1px solid;
                padding-bottom: 4px;
                margin-bottom: ${rhythm(1 / 2)};
                color: inherit;
              `}
            >
              {issue}
              {issueDate && (
                <span
                  css={css`
                    font-size: 0.75em;
                    font-weight: normal;
                    margin-left: 12px;
                    opacity: 0.7;
                  `}
                >
                  {issueDate}
                </span>
              )}
            </h3>
            {items.map((node) => (
              <Card bsPrefix="card" key={node.id}>
                <Card.Body>
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
                    {node.frontmatter.cover_image && (
                      <GatsbyImage
                        image={getImage(node.frontmatter.cover_image)}
                        alt={node.frontmatter.title}
                      />
                    )}
                    <Card.Title>
                      <h2
                        css={css`
                          margin-top: ${rhythm(1 / 4)};
                          margin-bottom: ${rhythm(1 / 4)};
                          text-align: center;
                          font-size: 1.2rem;
                        `}
                      >
                        {node.frontmatter.title}
                      </h2>
                    </Card.Title>
                  </Link>
                  <Card.Subtitle className="mb-2 text-muted text-center">
                    {node.frontmatter.writer}
                  </Card.Subtitle>
                  <Card.Text>{node.excerpt}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        );
      })}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: ASC } }
      filter: { fileAbsolutePath: { regex: "/archives/" } }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            rawDate: date
            title
            writer
            issue
            issue_date
            cover_image {
              childImageSharp {
                gatsbyImageData(height: 560, layout: CONSTRAINED)
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
