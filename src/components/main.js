import React from "react";
import Cover from "./Cover";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./contact";
import Projects from "./Projects";
const Main = () => (
  <Switch>
    <Route exact path="/" component={Cover} />
    <Route exact path="/about" component={AboutMe} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
  </Switch>
);

export default Main;
