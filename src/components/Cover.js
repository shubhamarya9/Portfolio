import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import img from "../avatar.png";
import { HashRouter as Router } from "react-router-dom";
import ParticleComponent from "./particleComponent";
import Typed from "react-typed";

class Cover extends Component {
  render() {
    return (
      <Router>
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Grid className="landing-grid">
            <ParticleComponent />
            <Cell col={12}>
              <img src={img} className="avatar-img" alt="animoji" />
              <div className="type-writer">
                <h1>
                  <Typed
                    strings={["Shubham Arya"]}
                    typeSpeed={100}
                    backSpeed={80}
                    loop
                  />
                </h1>
              </div>
              <div className="description">
                <h1>
                  <i className="fas fa-code" />
                  Web Developer
                </h1>
                <hr />
                <p>
                  HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB
                </p>
              </div>
            </Cell>

            <div className="social-links">
              <h3>
                My Social Links: <br />
              </h3>

              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/shubham-arya-630957163/"
              >
                <i
                  className="fab fa-linkedin linkd"
                  aria-hidden="true"
                  id="linkedin"
                />
              </a>
              <a
                href="https://www.instagram.com/__shubhamaaryaa.js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" aria-hidden="true" id="insta" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                href="https://github.com/shubhamarya9/"
              >
                <i className="fab fa-github" aria-hidden="true" id="git" />
              </a>
            </div>
          </Grid>
        </div>
      </Router>
    );
  }
}
export default Cover;
