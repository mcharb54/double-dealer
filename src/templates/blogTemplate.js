import React from "react";
import SEO from "../components/SEO";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import Img from "gatsby-image";


export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, fields, html, excerpt } = markdownRemark;
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        image={frontmatter.cover_image.childImageSharp.resize}
        pathname={fields.slug}
        description={excerpt}
      />
      <div>
        <Img fluid={frontmatter.cover_image.childImageSharp.fluid} />
        <h1
          css={css`
            margin-top: ${rhythm(1 / 2)};
            margin-bottom: ${rhythm(1 / 4)};
            text-align: center;
            color: inherit;
          `}
        >
          {frontmatter.title}
        </h1>
        <h5>By {frontmatter.writer}</h5>
        <h5>
          <Link
            to={frontmatter.backroad}
            css={css`
              display: inline-block;
              font-style: normal;
            `}
          >
            <h5
              css={css`
                color: gray;
              `}
            >
              Dealer's choice
            </h5>
          </Link>
        </h5>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        writer
        backroad
        cover_image {
          publicURL
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.

            fluid(maxHeight: 560) {
              ...GatsbyImageSharpFluid
              src
            }
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
      excerpt
    }
  }
`;
