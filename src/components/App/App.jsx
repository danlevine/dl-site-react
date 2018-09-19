import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import styled from "styled-components";
import ContentAbout from "../ContentAbout";
import ContentHome from "../ContentHome";
import ContentLinks from "../ContentLinks";

import logo from "../../assets/logo.svg";

class App extends Component {
  render() {
    return (
      <AppStyled className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/links">links</Link>
        </header>
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
