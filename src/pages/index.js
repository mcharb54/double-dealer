import React from "react";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "react-bootstrap/Card";
import { useTheme } from "../context/ThemeContext";

export default function IndexPage({ data }) {
  const { dark } = useTheme();
  const cardBorder = dark
    ? "1px solid rgba(255, 255, 255, .875)"
    : "1px solid rgba(0, 0, 0, .125)";

  return (
    <Layout>
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
      <SEO
        title="Home"
        keywords={[
          `southern magazine`,
          `the south`,
          `the double dealer`,
          `double dealer`,
          `new orleans`,
          `double dealer magazine`,
          `the double dealer magazine`
        ]}
      />
      <div>
        <h6
          css={css`
            text-align: center;
            color: inherit;
            margin: 0;
            padding: 0;
            ${dark ? "transform: scale(-1, 1);" : ""}
          `}
        >
          The
        </h6>
        <h1
          css={css`
            border-bottom: 1px solid;
            text-align: center;
            color: inherit;
            ${dark ? "transform: scale(-1, 1);" : ""}
          `}
        >
          Double Dealer
        </h1>
      </div>
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
                    color: #0080c0;
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
                      font-style: normal;
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
                resize(width: 1200) {
                  width
                  height
                  src
                }
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
