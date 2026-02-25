import React from "react";
import SEO from "../components/SEO";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

export default function BlogTemplate({ data, pageContext }) {
  const { markdownRemark } = data;
  const { frontmatter, fields, html, excerpt } = markdownRemark;
  const { dark } = pageContext;

  const altThemePath = dark ? fields.slug : frontmatter.backroad;
  const altThemeLabel = dark ? "Light Theme" : "Dark Theme";

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
    <Layout dark={!!dark}>
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
        <GatsbyImage
          image={getImage(frontmatter.cover_image)}
          alt={frontmatter.title}
        />
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
              display: inline-block;
              font-style: normal;
              float: left;
              color: inherit;
            `}
          >
            By {frontmatter.writer}
          </h5>
          <br />
          <br />
          {altThemePath && (
            <Link
              to={altThemePath}
              css={css`
                display: inline-block;
                font-style: normal;
                float: left;
              `}
            >
              <h6 css={css`color: #0080c0; text-decoration: underline;`}>
                {altThemeLabel}
              </h6>
            </Link>
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
        backroad
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
