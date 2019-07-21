import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/layout";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <h5>By {frontmatter.writer}</h5>
        <h5>
        <Link
          to={frontmatter.backroad}
          css={css`
            display: inline-block;
            font-style: normal;
          `}
        >
          Change view
        </Link>
        </h5>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
