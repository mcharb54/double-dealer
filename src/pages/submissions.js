import React from "react";
import Helmet from "react-helmet";
import { navigate } from "gatsby-link";
import { css } from "@emotion/core";
import Layout from "../components/layout";
import Button from "react-bootstrap/Button";

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
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>The Double Dealer</title>
            <link rel="canonical" href="https://thedoubledealer.com" />
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          </Helmet>
          <h1
            css={css`
              display: inline-block;
              border-bottom: 1px solid;
              text-align: center;
              background-color: inherit;
              color: inherit;
            `}
          >
            File Upload
          </h1>
          <br />
          <br />
          <form
            name="file-upload"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="file-upload" />
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
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                File:
                <br />
                <input
                  type="file"
                  name="attachment"
                  onChange={this.handleAttachment}
                />
              </label>
            </p>
            <p>
              <Button variant="dark" type="submit">
                Send
              </Button>
            </p>
          </form>
        </div>
      </Layout>
    );
  }
}
