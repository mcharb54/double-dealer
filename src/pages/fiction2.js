import React from "react";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import Layout from "../components/layout";
import { rhythm } from "../utils/typography";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "react-bootstrap/Card";

export default function Fiction2Page({ data }) {
  return (
    <Layout dark>
      <SEO title="Fiction" />
      <Helmet>
        <style type="text/css">{`
          .card {
            font-family: 'Playfair Display', serif;
            background-color: inherit;
            color: white;
            width: 100%;
            margin: 0;
            padding: 0;
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255, .875);
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
        Fiction
      </h1>
      <br />
      <br />
      <Link to="/fiction" css={css`display: inline-block; font-style: normal;`}>
        <h5 css={css`color: #0080c0; text-decoration: underline;`}>
          Light Theme
        </h5>
      </Link>
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
                      color: inherit;
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
      filter: { fileAbsolutePath: { regex: "/fiction/" } }
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
