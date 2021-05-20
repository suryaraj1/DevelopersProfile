import React from "react";
import "./DeveloperLink.css";

class DeveloperLink extends React.Component {
  render() {
    const { image, handle } = this.props;
    return (
      <div className="developer-link">
        <img className="developer-link-img" src={image} />
        <p className="developer-link-handle">{handle}</p>
      </div>
    );
  }
}

export default DeveloperLink;
