import React, { Component } from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import ContentAbout from "../ContentAbout";
import ContentHome from "../ContentHome";
import ContentLinks from "../ContentLinks";

import AppHeader from "../AppHeader";

class App extends Component {
  getLinks() {
    return [
      {
        title: "Home",
        url: "/"
      },
      {
        title: "About",
        url: "/about"
      },
      {
        title: "Links",
        url: "/links"
      }
    ];
  }

  render() {
    return (
      <AppStyled className="App">
        <AppHeader links={this.getLinks()} />
        <Router>
          <ContentHome path="/" />
          <ContentAbout path="/about" />
          <ContentLinks path="/links" />
        </Router>
      </AppStyled>
    );
  }
}

const AppStyled = styled.div`
  text-align: center;

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  }

  .App-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  .App-title {
    font-size: 1.5em;
  }

  .App-intro {
    font-size: large;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default App;
