import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import Img from "gatsby-image";

export default ({ data }) => {

  return (
  <Layout>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Double Dealer</title>
        <link rel="canonical" href="https://thedoubledealer.com" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
      <br />
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.frontmatter.path}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h2
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
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
        ))}
      </div>
    </div>
  </Layout>
)};

export const query = graphql`
  query {
    file(relativePath: { eq: "icon.png" }) {
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
            path
            title
            backroad
            writer
          }
        }
      }
    }
  }
`;