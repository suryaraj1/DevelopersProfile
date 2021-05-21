import React from "react";
import "./DeveloperLink.css";
import LinkLogo from "../static/north_east-24px.svg";

class DeveloperLink extends React.Component {
  render() {
    const { image, handle } = this.props;
    return (
      <div className="developer-link">
        <img className="developer-link-img" src={image} alt="developer-image" />
        <p className="developer-link-handle">
          {handle} <img src={LinkLogo} className="developer-link-icon" />
        </p>
      </div>
    );
  }
}

export default DeveloperLink;
