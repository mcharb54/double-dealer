import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import Tuoyal from "../components/tuoyal";

export default function Template2({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Tuoyal>
      <div
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
        <h1
          css={css`
            text-decoration: none;
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
          to={frontmatter.path}
          css={css`
            display: inline-block;
            font-style: normal;
          `}
        >
          Dealer's choice
        </Link>
        </h5>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Tuoyal>
  );
}

export const pageQuery2 = graphql`
  query BlogPostByPath2($path: String!) {
    markdownRemark(frontmatter: { backroad: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        backroad
        title
        writer
      }
    }
  }
`;
