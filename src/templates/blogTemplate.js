import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import { Helmet } from "react-helmet";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import Img from "gatsby-image";

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, fields, html, excerpt } = markdownRemark;
  const articleURL = `https://thedoubledealer.com`;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://thedoubledealer.com" />
        <meta
          property="og:image"
          content={frontmatter.cover_image.childImageSharp.fluid.src}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleURL + fields.slug} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={excerpt} />
      </Helmet>
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
