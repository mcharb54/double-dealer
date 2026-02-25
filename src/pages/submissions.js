import React from "react";
import { css } from "@emotion/react";
import { navigate } from "gatsby-link";
import Layout from "../components/layout";
import Button from "react-bootstrap/Button";

function encode(data) {
  const formData = new FormData();
  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }
  return formData;
}

export default class SubmissionsPage extends React.Component {
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
            color: inherit;
          `}
        >
          Submit
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
          <input type="hidden" name="form-name" value="file-upload" />
          <p hidden>
            <label>
              Don't fill this out:{" "}
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
      </Layout>
    );
  }
}
