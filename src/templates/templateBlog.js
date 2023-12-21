import React from "react";
import SEO from "../components/SEO";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import Tuoyal from "../components/tuoyal";
import Img from "gatsby-image";

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, fields, html, excerpt } = markdownRemark;
  return (
    <Tuoyal>
      <SEO
        title={frontmatter.title}
        image={frontmatter.cover_image.childImageSharp.resize}
        pathname={fields.slug}
        description={excerpt}
      />
      <div
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
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
        <hr />
        <div>
          <h5
            css={css`
              text-decoration: none;
              display: inline-block;
              color: inherit;
              float: left;
            `}
          >
            By {frontmatter.writer}
          </h5>
          <br />
          <br />
          <Link
            to={fields.slug}
            css={css`
              display: inline-block;
              font-style: normal;
              float: left;
            `}
          >
            <h6
              css={css`
                color: #0080c0;
                text-decoration: underline;
              `}
            >
              Light Theme
            </h6>
          </Link>
        </div>
        <br />
        <br />
        <div
          css={css`
            font-family: "Roboto", sans-serif;
          `}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Tuoyal>
  );
};

export const templateBlogQuery = graphql`
  query templateBlogQuery($path: String!) {
    markdownRemark(frontmatter: { backroad: { eq: $path } }) {
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