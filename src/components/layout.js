import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import { useStaticQuery, Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import ogol from "../images/twotree.png";

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
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          `}
        >
          <Link
            to={`/`}
            css={css`
              display: inline-block;
              grid-column: 1 / span 3;
              margin-top: 15px;
              margin-font-style: normal;
              text-decoration: none;
            `}
          >
            <h3
              css={css`
                font-style: normal;
                color: white;
                text-align: left;
              `}
            >
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <Link
            to={`/features`}
            css={css`
              display: inline-block;
              grid-column: 4 / span 1;
              margin-top: 25px;
              margin-left: 10px;
              margin-right: 10px;
              font-style: normal;
              text-decoration: none;
            `}
          >
            <h6
              css={css`
                font-style: normal;
                color: white;
                text-align: center;
              `}
            >
              Features
            </h6>
          </Link>
          <Link
            to={`/fiction`}
            css={css`
              display: inline-block;
              grid-column: 5 / span 1;
              margin-top: 25px;
              margin-left: 10px;
              margin-right: 10px;
              font-style: normal;
              text-decoration: none;
            `}
          >
            <h6
              css={css`
                font-style: normal;
                color: white;
                text-align: center;
              `}
            >
              Fiction
            </h6>
          </Link>
          <Link
            to={`/sections`}
            css={css`
              display: inline-block;
              grid-column: 6 / span 1;
              margin-top: 25px;
              margin-left: 10px;
              margin-right: 10px;
              font-style: normal;
              text-decoration: none;
            `}
          >
            <h6
              css={css`
                font-style: normal;
                color: white;
                text-align: center;
              `}
            >
              Sections
            </h6>
          </Link>
          <Link
            to={`/xedni`}
            css={css`
              display: inline-block;
              grid-column: 7 / span 3;
              margin-left: 38%;
              margin-right: 38%;
              margin-top: 0;
              margin-bottom: 0;
            `}
          >
            <img
              css={css`
                height: 60px;
                width: 60px;
                margin-top: 0;
                margin-bottom: 0;
              `}
              src={ogol}
              alt="logo"
            />
          </Link>
          <Link
            to={`/latest`}
            css={css`
              display: inline-block;
              grid-column: 14 / span 1;
              margin-top: 25px;
              margin-left: 10px;
              margin-right: 10px;
              font-style: normal;
              text-decoration: none;
            `}
          >
            <h6
              css={css`
                font-style: normal;
                text-align: center;
                color: white;
              `}
            >
              Latest
            </h6>
          </Link>
          <Link
            to={`/search`}
            css={css`
              display: inline-block;
              grid-column: 15 / span 1;
              margin-top: 25px;
              margin-left: 10px;
              margin-right: 10px;
              font-style: normal;
              text-decoration: none;
            `}
          >
            <h6
              css={css`
                font-style: normal;
                text-align: center;
                color: white;
              `}
            >
              Search
            </h6>
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
