import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import Tuoyal from "../components/tuoyal";
import SEO from "../components/SEO";
import Img from "gatsby-image";
import Card from "react-bootstrap/Card";

export default ({ data }) => {
  return (
    <Tuoyal>
      <div>
        <SEO
          title="Home"
          keywords={[
            `southern magazine`,
            `the south`,
            `the double dealer`,
            `double`,
            `dealer`,
            `double dealer`,
            `new orleans`,
            `double dealer new orleans`,
            `double dealer magazine`,
            `the double dealer magazine`
          ]}
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>The Double Dealer</title>
          <link rel="canonical" href="https://thedoubledealer.com" />
          <style>{"body { background-color: black; }"}</style>
          <style type="text/css">
            {`
          .card {
            font-family: 'Playfair Display', serif;
            background-color: inherit;
            color: inherit;
            width: 100%;
            margin: 0;
            padding: 0;
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255,.875);
          }
    `}
          </style>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
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

        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
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
                    <Img
                      fluid={node.frontmatter.cover_image.childImageSharp.fluid}
                    />

                    <h2
                      css={css`
                        margin-top: ${rhythm(1 / 4)};
                        margin-bottom: ${rhythm(1 / 4)};
                        text-align: center;
                        font-style: normal;
                        color: white;
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
          );
        })}
      </div>
    </Tuoyal>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            writer
            backroad
            cover_image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxHeight: 560) {
                  ...GatsbyImageSharpFluid
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
