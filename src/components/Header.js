import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class Header extends Component {
  
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Age calculator app</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="stylesheet" type="text/css" href="style.css" />
        </Helmet>
      </>
    );
  }
}
