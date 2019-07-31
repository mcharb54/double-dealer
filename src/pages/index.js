import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import Img from "gatsby-image";
import Card from "react-bootstrap/Card";

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <SEO
          title="The Double Dealer"
          image={data.markdownRemark.frontmatter.cover_image.childImageSharp.fixed}
          keywords={[`magazine`, `south`, `double`, `dealer`]}
        />
        <Helmet>
          <style type="text/css">
            {`
          .card {
            font-family: 'Playfair Display', serif;
            width: 100%;
            margin: 0;
            padding: 0;
            border: none;
            border-bottom: 1px solid rgba(0,0,0,.125);
          }
    `}
          </style>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Helmet>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Card bsPrefix="card">
              <Card.Body>
                <Link
                  to={node.fields.slug}
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                >
                  <Img
                    fluid={node.frontmatter.cover_image.childImageSharp.fluid}
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
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
      markdownRemark(id: {eq: "fd6b9b17-e097-5993-b7ce-c97cabdb2249"}) {
        id
        frontmatter {
          cover_image {
            childImageSharp {
              fixed{
                width
                height
                src
              }
            }
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
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            writer
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
