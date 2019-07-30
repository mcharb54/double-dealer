import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import Tuoyal from "../components/tuoyal";
import Img from "gatsby-image";

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, fields, html } = markdownRemark;
  return (
    <Tuoyal>
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
        <h5
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          By {frontmatter.writer}
        </h5>
        <h5>
          <Link
            to={fields.slug}
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
    </Tuoyal>
  );
};

export const pageQuery2 = graphql`
  query BlogPostByPath2($path: String!) {
    markdownRemark(frontmatter: { backroad: { eq: $path } }) {
      html
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
`;
