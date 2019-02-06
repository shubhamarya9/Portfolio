import React, { Component } from "react";
import "./App.css";
import Main from "./components/main";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import ParticleComponent from "./components/particleComponent";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <ParticleComponent />
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Portfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>

              {/* <Link to="/">Link</Link>
              <Link to="/">Link</Link> */}
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
