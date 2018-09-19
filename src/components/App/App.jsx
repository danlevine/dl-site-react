import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import ContentAbout from "../ContentAbout";
import ContentHome from "../ContentHome";
import ContentLinks from "../ContentLinks";

import logo from "../../assets/logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Router>
          <ContentHome path="/" />
          <ContentAbout path="/about" />
          <ContentLinks path="/links" />
        </Router>
      </div>
    );
  }
}

export default App;
