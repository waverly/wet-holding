import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import ResponsiveEmbed from "react-responsive-embed";

import "../css/Home.css";

class Home extends React.Component {
  render() {
    if (this.props) {
      return (
        <div className="home-wrap">
          <div className="video-container">
            {/*
            <div className="videoWrap">
              <iframe src={this.props.videolink} frameBorder="0" />

            </div>
            */}
            <div className="holding-img">
              <img src="../../public/singleart.png" alt="" />
            </div>
          </div>
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}

export default Home;
