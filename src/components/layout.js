import React from "react";
import { css } from "@emotion/react";
import { Helmet } from "react-helmet";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useStaticQuery, Link, graphql } from "gatsby";
import logo from "../images/blackddlogo.png";
import { useTheme } from "../context/ThemeContext";

export default function Layout({ children }) {
  const { dark, toggleTheme } = useTheme();

  const data = useStaticQuery(graphql`
    query SiteLayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const bg = dark ? "black" : "white";
  const fg = dark ? "white" : "black";
  const navBg = dark ? "white" : "black";

  return (
    <div
      css={css`
        margin: 0;
        background-color: ${bg};
        color: ${fg};
      `}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <style type="text/css">
          {dark
            ? `body { background-color: black; color: white; }
               a { color: white; }
               .bg-custom-nav { background-color: white; color: black; font-family: 'Playfair Display', serif; padding-left: 20px; padding-right: 20px; }`
            : `body { background-color: white; color: black; }
               a { color: inherit; }
               .bg-custom-nav { background-color: black; color: white; font-family: 'Playfair Display', serif; padding-left: 20px; padding-right: 20px; }`}
        </style>
      </Helmet>

      {/* Navigation */}
      <div
        css={css`
          margin: 0;
          background-color: ${navBg};
        `}
      >
        <div
          css={css`
            margin: 0 auto;
            max-width: 1200px;
          `}
        >
          <Navbar
            bg="custom-nav"
            bsPrefix="navbar"
            variant={dark ? "light" : "dark"}
            expand="lg"
          >
            <Navbar.Brand
              css={css`
                ${dark ? "transform: scale(-1, 1);" : ""}
              `}
              className="mr-0"
              as={Link}
              to="/"
            >
              <img
                src={logo}
                height="75"
                alt="The Double Dealer"
                style={dark ? { filter: "invert(1)" } : {}}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/features">Features</Nav.Link>
                <Nav.Link as={Link} to="/fiction">Fiction</Nav.Link>
                <Nav.Link as={Link} to="/archives">Archives</Nav.Link>
                <Nav.Link as={Link} to="/latest">Latest</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav>
              <button
                onClick={toggleTheme}
                css={css`
                  background: none;
                  border: none;
                  padding: 0;
                  cursor: pointer;
                  ${!dark ? "transform: scale(-1, 1);" : ""}
                `}
                aria-label="Toggle theme"
              >
                <img
                  src={logo}
                  height="75"
                  alt="Toggle theme"
                  style={!dark ? { filter: "invert(1)" } : {}}
                />
              </button>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>

      {/* Content */}
      <div
        className="site"
        css={css`
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          background-color: ${bg};
          color: ${fg};
          max-width: 700px;
          padding: 0;
        `}
      >
        <div
          className="site-content"
          css={css`
            flex-grow: 1;
            padding-top: 50px;
            padding-left: 20px;
            padding-right: 20px;
          `}
        >
          {children}
        </div>
        <footer
          css={css`
            position: relative;
            padding-top: 40px;
          `}
        >
          <p
            css={css`
              float: left;
              color: ${fg};
              font-style: normal;
              padding-right: 20px;
              padding-bottom: 20px;
            `}
          >
            Copyright © 2019–present The Double Dealer™
          </p>
          <Link
            to="/about/"
            css={css`
              float: right;
              color: ${fg};
              text-decoration: underline;
              font-style: normal;
              padding-right: 20px;
              padding-bottom: 20px;
            `}
          >
            About
          </Link>
        </footer>
      </div>
    </div>
  );
}
