import React from "react";
import { css } from "@emotion/core";
import { Helmet } from "react-helmet";
import { useStaticQuery, Link, graphql } from "gatsby";

import { rhythm } from "../utils/typography";

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
        background-color: black;
        color: white;
      `}
    >
      <div
        css={css`
          margin: 0 auto;
          background-color: black;
          color: white;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <link rel="canonical" href="https://thedoubledealer.com" />
        </Helmet>
        <ul
          css={css`
            list-style-type: none;
            text-align: center;
            color: white;
          `}
        >
          <li
            css={css`
              display: inline-block;
              padding: 20px;
            `}
          >
            <Link to={`/`}>
              <h3
                css={css`
                  margin-bottom: ${rhythm(2)};
                  color: white;
                  font-style: normal;
                  display: inline-block;
                `}
              >
                {data.site.siteMetadata.title}
              </h3>
            </Link>
          </li>
          <li
            css={css`
              display: inline-block;
              padding: 20px;
            `}
          >
            <Link to={`/xedni`}>
              <h3
                css={css`
                  margin-bottom: ${rhythm(2)};
                  color: white;
                  font-style: normal;
                `}
              >
                {data.site.siteMetadata.eltit}
              </h3>
            </Link>
          </li>
        </ul>
        {children}
        <div>
          {" "}
          <Link
            to={`/about/`}
            css={css`
              float: right;
            `}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};
