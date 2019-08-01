import React from "react";
import { css } from "@emotion/core";
import { navigate } from "gatsby-link";
import Layout from "../components/layout";
import Button from "react-bootstrap/Button";
import logo from "../images/icon.png";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
            text-align: center;
            background-color: inherit;
            color: inherit;
          `}
        >
          About
        </h1>
        <br />
        <br />
        <p>
          The Double Dealer is a literary magazine about the South created by
          two homesick expats.
        </p>
        <p>
          We will soon be accepting submissions for fiction, poetry, essays and
          journalism.
        </p>
        <p>
          While we are focused on the South, we are happy to consider ideas
          about any topic, in any form and from any individuals.
        </p>
        <p>Consider it dealer's choice.</p>
        <p>
          <img
            alt="Logo"
            src={logo}
            width="50px"
            height="30px"
            css={css`
              padding-right: 20px;
            `}
          />
          ––Double Dealer Magazine
        </p>
        <br />
        <br />
        <h3
          css={css`
            border-bottom: 1px solid;
            text-align: center;
            background-color: inherit;
            color: inherit;
          `}
        >
          Sign up here to receive updates!
        </h3>
        <form
          name="email-signup"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          css={css`
            text-align: center;
          `}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="email-signup" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:
              <br />
              <input
                css={css`
                  display: inline-block;
                  border-bottom: 1px solid;
                  text-align: center;
                  background-color: inherit;
                  color: inherit;
                `}
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your email address:
              <br />
              <input
                css={css`
                  display: inline-block;
                  border-bottom: 1px solid;
                  text-align: center;
                  background-color: inherit;
                  color: inherit;
                `}
                type="text"
                name="email"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <Button variant="dark" type="submit">
              Sign up!
            </Button>
          </p>
        </form>
      </Layout>
    );
  }
}
