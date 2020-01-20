import React, { Component, Fragment } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1 className="headline">Hello, I'm Klaven.</h1>
          <p>
            My site is currently undergoing some <span>renovations</span>. In
            the mean time, checkout some of my code on{" "}
            <a href="https://github.com/klavenjones">Github</a>, or visit me on{" "}
            <a href="https://www.linkedin.com/in/klaven-jones/">Linkedin</a>.
            Get in touch!
          </p>
        </div>
      </Fragment>
    );
  }
}
