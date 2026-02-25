import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "react-bootstrap/Card";

export default function XedniPage({ data }) {
  return (
    <Layout dark>
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Double Dealer</title>
        <link rel="canonical" href="https://thedoubledealer.com" />
        <style type="text/css">{`
          .card {
            font-family: 'Playfair Display', serif;
            background-color: inherit;
            color: inherit;
            width: 100%;
            margin: 0;
            padding: 0;
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255, .875);
          }
        `}</style>
      </Helmet>
      <div>
        <h6
          css={css`
            text-align: center;
            color: inherit;
            margin: 0;
            padding: 0;
            transform: scale(-1, 1);
          `}
        >
          The
        </h6>
        <h1
          css={css`
            border-bottom: 1px solid;
            text-align: center;
            color: inherit;
            transform: scale(-1, 1);
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
                to={node.frontmatter.backroad}
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
            backroad
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
