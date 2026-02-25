import React from "react";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import Layout from "../components/layout";
import { rhythm } from "../utils/typography";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "react-bootstrap/Card";
import { useTheme } from "../context/ThemeContext";

export default function ArchivesPage({ data }) {
  const { dark } = useTheme();
  const cardBorder = dark
    ? "1px solid rgba(255, 255, 255, .875)"
    : "1px solid rgba(0, 0, 0, .125)";

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
      <br />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Card bsPrefix="card">
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
                <GatsbyImage
                  image={getImage(node.frontmatter.cover_image)}
                  alt={node.frontmatter.title}
                />
                <Card.Title>
                  <h2
                    css={css`
                      margin-top: ${rhythm(1 / 4)};
                      margin-bottom: ${rhythm(1 / 4)};
                      text-align: center;
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
              <Card.Subtitle className="mb-2 text-muted text-center">
                {node.frontmatter.date}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/archives/" } }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            writer
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
