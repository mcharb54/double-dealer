import React from "react";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import { useTheme } from "../context/ThemeContext";

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, fields, html, excerpt } = markdownRemark;
  const { dark, toggleTheme } = useTheme();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    author: { "@type": "Person", name: frontmatter.writer },
    datePublished: frontmatter.isoDate,
    image: frontmatter.cover_image
      ? frontmatter.cover_image.childImageSharp.resize.src
      : undefined,
    description: excerpt,
    publisher: {
      "@type": "Organization",
      name: "The Double Dealer",
      url: "https://www.thedoubledealer.com"
    }
  };

  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <SEO
        title={frontmatter.title}
        image={frontmatter.cover_image && frontmatter.cover_image.childImageSharp.resize}
        pathname={fields.slug}
        description={excerpt}
      />
      <div>
        {frontmatter.cover_image && (
          <GatsbyImage
            image={getImage(frontmatter.cover_image)}
            alt={frontmatter.title}
          />
        )}
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
        <div css={css`text-align: center; margin-bottom: ${rhythm(1 / 2)};`}>
          <button
            onClick={toggleTheme}
            css={css`
              background: none;
              border: 1px solid currentColor;
              color: inherit;
              padding: 4px 14px;
              cursor: pointer;
              font-size: 0.8rem;
              letter-spacing: 0.05em;
            `}
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <hr />
        <div>
          <h5
            css={css`
              display: inline-block;
              font-style: normal;
              float: left;
              color: inherit;
            `}
          >
            By {frontmatter.writer}
          </h5>
          {frontmatter.issue && (
            <h6
              css={css`
                display: inline-block;
                font-style: italic;
                float: right;
                color: inherit;
                margin-top: 2px;
              `}
            >
              {frontmatter.issue} &mdash; {frontmatter.issue_date}
            </h6>
          )}
        </div>
        <br />
        <br />
        <div
          css={css`
            font-family: "Roboto", sans-serif;
            color: inherit;
          `}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        isoDate: date(formatString: "YYYY-MM-DD")
        title
        writer
        issue
        issue_date
        cover_image {
          childImageSharp {
            gatsbyImageData(height: 560, layout: CONSTRAINED)
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
    }
  }
`;
