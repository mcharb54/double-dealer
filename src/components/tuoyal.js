import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useStaticQuery, Link, graphql } from "gatsby";
import logo from "../images/icon.png";
import SEO from "../components/SEO";
import linkPhoto from "../images/twinoaks.png";

const HeaderDiv = styled.div`
  margin: 0;
  background-color: white;
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
        color: white;
        background-color: black;
      `}
    >
      <SEO banner={linkPhoto} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <style type="text/css">
          {`
          body { background-color: black; color: white; }
          a {color: black; }
          .bg-custom-nav {
            background-color: white;
            color: black;
            font-family: 'Playfair Display', serif;
            max-width: 1200px;
            margin: 0;
            padding: 0;
            padding-left: 20px;
            padding-right: 20px;
          }
    `}
        </style>
        <link rel="canonical" href="https://thedoubledealer.com" />
      </Helmet>
      <HeaderDiv>
        <div
          css={css`
            margin: 0 auto;
            max-width: 1200px;
          `}
        >
          <Navbar bg="custom-nav" bsPrefix="navbar" variant="light" expand="lg">
            <Navbar.Brand href="/">
              <img alt="Logo" src={logo} width="40" height="40" />
              {"  "}
              {data.site.siteMetadata.eltit}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto d-flex justify-content-center">
                <Nav.Link href="/features2">Features</Nav.Link>
                <Nav.Link href="/fiction2">Fiction</Nav.Link>
                <Nav.Link href="/archives2">Archives</Nav.Link>
                <Nav.Link href="/latest2">Latest</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                {/* <Nav.Link href="/submissions">Submit</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </HeaderDiv>
      <div
        className="site"
        css={css`
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          background-color: black;
          color: white;
          max-width: 700px;
          padding: 0;
        `}
      >
        <div
          className="site-content"
          css={css`
             {
              flex-grow: 1;
              padding-top: 50px;
              padding-left: 20px;
              padding-right: 20px;
            }
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
          {" "}
          <Link
            to={`/about/`}
            css={css`
              float: right;
              color: white;
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
};
