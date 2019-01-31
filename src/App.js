import React, { Component } from "react";
import "./App.css";
import Main from "./components/main";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Portfolio" scroll>
            <Navigation>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              {/* <Link to="/">Link</Link>
              <Link to="/">Link</Link> */}
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/about">About</Link>
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
