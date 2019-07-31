import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useStaticQuery, Link, graphql } from "gatsby";
import ogol from "../images/twotree.png";
import linkPhoto from "../images/twinoaks.png"


const HeaderDiv = styled.div`
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
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.thedoubledealer.com/"} />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:image" content={linkPhoto} />
        <meta property="og:description" content="I can deceive them both by speaking the truth." />
        <title>{data.site.siteMetadata.title}</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <style type="text/css">
          {`
          a {color: white;}
          .bg-custom-nav {
            background-color: black;
            color: white;
            font-family: 'Playfair Display', serif;
            margin: 0;
            padding: 0;
            padding-left: 20px;
            padding-right: 20px;
          }
    `}
        </style>
      </Helmet>
      <HeaderDiv>
        <div
          css={css`
            margin: 0 auto;
            max-width: 1200px;
          `}
        >
          <Navbar bg="custom-nav" bsPrefix="navbar" variant="dark" expand="lg">
            <Navbar.Brand href="/xedni">
              <img alt="Logo" src={ogol} width="40" height="40" />
              {"  "}
              {data.site.siteMetadata.title}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/features">Features</Nav.Link>
                <Nav.Link href="/fiction">Fiction</Nav.Link>
                <Nav.Link href="/sections">Sections</Nav.Link>
                <Nav.Link href="/latest">Latest</Nav.Link>
                <Nav.Link href='/about'>About</Nav.Link>
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
          max-width: 700px;
          padding: 0;
          background-color: white;
        `}
      >
        <div
          css={css`
             {
              flex-grow: 1;
              padding-top: 50px;
              padding-left: 20px;
              padding-right:20px;
            }
          `}
          className="site-content"
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
              color: black;
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
