import React from "react";
import { Link } from "react-router-dom";

import "../css/Nav.css";

class Nav extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    const path = this.props.location.pathname;

    return (
      <div className="nav-wrap">
        <div className="nav-item">
          <a href="https://www.facebook.com/wet#_=_">Facebook</a>
        </div>
        <div className="nav-item">
          <a href="https://twitter.com/wet">Twitter</a>
        </div>
        <div className="nav-item">
          <a href="https://www.instagram.com/wet/">Instagram</a>
        </div>
        <div className="nav-item">
          <a href="https://www.youtube.com/user/allwetmusicVEVO#_=_">YouTube</a>
        </div>
        <div className="nav-item">
          <a href="https://open.spotify.com/artist/2i9uaNzfUtuApAjEf1omV8#_=_">
            Spotify
          </a>
        </div>
        <div className="nav-item">
          <a href="https://www.bandsintown.com/a/198778">Tour</a>
        </div>
      </div>
    );
  }
}

export default Nav;
