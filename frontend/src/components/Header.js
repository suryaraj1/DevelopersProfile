import React from "react";
import "./Header.css";
import HeaderImage from "../static/undraw_dev_productivity_umsq 1.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-upper">
          <div className="header-text">
            <p>The Developer</p>
            <p>Repository</p>
          </div>
          <div className="header-image">
            <img src={HeaderImage} className="image" />
          </div>
        </div>
        <div className="header-lower">
          <p>Explore developer profiles</p>
        </div>
        <hr className="header-divider" />
      </div>
    );
  }
}

export default Header;
