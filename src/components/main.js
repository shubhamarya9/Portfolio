import React from "react";
import Cover from "./Cover";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./contact";
const Main = () => (
  <Switch>
    <Route exact path="/" component={Cover} />
    <Route exact path="/about" component={AboutMe} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Main;
