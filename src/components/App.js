import React, { Component } from "react";
import Prismic from "prismic-javascript";
import Nav from "./Nav";
import Home from "./Home";
import ReactCSSTransitionReplace from "react-css-transition-replace";
import "../css/App.css";

import { Switch, Route } from "react-router-dom";

const apiEndpoint = "https://wetmusic.prismic.io/api/v2";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
      videolink: ""
    };
  }

  addData(item) {
    let counter = 0;
    const data = { ...this.state.data };
    item.forEach(d => {
      const videolink = d.data.video_link.url;
      this.setState({ videolink });
      this.setState({ data: d });
    });
  }

  componentDidMount() {
    Prismic.api(apiEndpoint).then(api => {
      api.query("").then(response => {
        console.log(response); // response is the response object, response.results holds the documents
        this.addData(response.results);
      });
    });
    // end of api
  }
  // end of didmount

  render() {
    return (
      <div className="router-ex">
        <Route
          render={({ location }) => (
            <ReactCSSTransitionReplace
              transitionName="fade"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              <div key={location.pathname}>
                <Route
                  path="/"
                  render={props => <Home videolink={this.state.videolink} />}
                />
                <Route path="/" component={Nav} />
              </div>
            </ReactCSSTransitionReplace>
          )}
        />
      </div>
    );
  }
}

export default App;
