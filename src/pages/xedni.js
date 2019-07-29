import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import Tuoyal from "../components/tuoyal";
import Img from "gatsby-image";

export default ({ data }) => {
  return (
    <Tuoyal>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>The Double Dealer</title>
          <link rel="canonical" href="https://thedoubledealer.com" />
          <style>{"body { background-color: black; }"}</style>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Helmet>
        <br />
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div key={node.id}>
                <Link
                  to={node.frontmatter.backroad}
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                >
                <Img fluid={node.frontmatter.cover_image.childImageSharp.fluid} />
                  <h2
                    css={css`
                      margin-bottom: ${rhythm(1 / 4)};
                      color: inherit;
                      text-align: center;
                    `}
                  >
                    {node.frontmatter.title}
                  </h2>
                </Link>
                <p
                  css={css`
                    color: grey;
                  `}
                >
                  By {node.frontmatter.writer} — {node.frontmatter.date}
                </p>
                <p>{node.excerpt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Tuoyal>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "ogol.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            writer
            backroad
            cover_image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid {
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
