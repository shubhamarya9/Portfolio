import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardActions,
  CardTitle,
  CardText,
  Button
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super();
    this.state = {
      activeTab: 0
    };
  }
  toggleCateogories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={6} style={{ minWidth: "350", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "180px",
                background:
                  "url(https://cms-assets.tutsplus.com/uploads/users/1896/posts/29954/preview_image/react-3.png)center/cover"
              }}
            >
              Contact Manager
            </CardTitle>
            <CardText>CRUD operations on contacts</CardText>
            <CardActions>
              <Button colored>Github</Button>
              <Button colored>Live</Button>
            </CardActions>
          </Card>
          {/* React 2*/}
          <Card shadow={6} style={{ minWidth: "350", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "180px",
                background:
                  "url(https://cms-assets.tutsplus.com/uploads/users/1896/posts/29954/preview_image/react-3.png)center/cover"
              }}
            >
              Photo Gallery
            </CardTitle>
            <CardText>Manage a photo gallery, add comments</CardText>
            <CardActions>
              <Button colored>Github</Button>
              <Button colored>Live</Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <div className="projects-grid">
            <Card shadow={6} style={{ minWidth: "350", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "green",

                  height: "180px",
                  background:
                    "url(https://sg.fiverrcdn.com/photos/105630108/original/f006de003b2b412e17de7f1fd5712a5d2100f7b8.png?1513603196)center/cover"
                }}
              >
                Weather-app
              </CardTitle>
              <CardText>CRUD operations on contacts</CardText>
              <CardActions>
                <Button colored>Github</Button>
                <Button colored>Live</Button>
              </CardActions>
            </Card>
            {/* React 2*/}
            <Card shadow={6} style={{ minWidth: "350", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "green",
                  height: "180px",
                  background:
                    "url(https://sg.fiverrcdn.com/photos/105630108/original/f006de003b2b412e17de7f1fd5712a5d2100f7b8.png?1513603196)center/cover"
                }}
              >
                To-Do-App
              </CardTitle>
              <CardText>Manage a photo gallery, add comments</CardText>
              <CardActions>
                <Button colored>Github</Button>
                <Button colored>Live</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <div className="projects-grid">
            <Card shadow={6} style={{ minWidth: "350", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "green",

                  height: "180px",
                  background:
                    "url(https://g.foolcdn.com/art/companylogos/square/mdb.png)center/cover"
                }}
              >
                Weather-app
              </CardTitle>
              <CardText>CRUD operations on contacts</CardText>
              <CardActions>
                <Button colored>Github</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <Card shadow={6} style={{ minWidth: "350", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",

                height: "180px",
                background:
                  "url(https://scotch-res.cloudinary.com/image/upload/w_900,q_auto:good,f_auto/v1540545426/tzs50mjrlopv85r3qjpq.jpg)center/cover"
              }}
            >
              Feedback-app
            </CardTitle>
            <CardText>CRUD operations on contacts</CardText>
            <CardActions>
              <Button colored>Github</Button>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabID => this.setState({ activeTab: tabID })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Node</Tab>
          <Tab>MongoDB</Tab>
          <Tab>MERN</Tab>
        </Tabs>

        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">{this.toggleCateogories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
