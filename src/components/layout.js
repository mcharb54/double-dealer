import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import { useStaticQuery, Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";

const Header = styled.header`
  margin: 0;
  background-color: black;
  color: white;
`;

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            eltit
          }
        }
      }
    `
  );
  return (
    <div
      css={css`
        margin: 0;
      `}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="https://thedoubledealer.com" />
      </Helmet>
      <Header>
        <div
          css={css`
            margin: 0 auto;
            max-width: 1200px;
          `}
        >
          <Link to={`/`}>
            <h4
              css={css`
                display: inline-block;
                margin-top: 15px;
                margin-left: 20px;
                font-style: normal;
                color: white;
                text-decoration: underline;
                text-decoration-color: red;
              `}
            >
              {data.site.siteMetadata.title}
            </h4>
          </Link>
          <Link
            to={`/xedni`}
            css={css`
              float: right;
            `}
          >
            <h4
              css={css`
                display: inline-block;
                margin-top: 15px;
                margin-right: 20px;
                font-style: normal;
                color: white;
              `}
            >
              {data.site.siteMetadata.eltit}
            </h4>
          </Link>
        </div>
      </Header>

      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
          background-color: white;
        `}
      >
        {children}
        <footer>
          {" "}
          <Link
            to={`/about/`}
            css={css`
              float: right;
              font-style: normal;
            `}
          >
            About
          </Link>
        </footer>
      </div>
    </div>
  );
};
