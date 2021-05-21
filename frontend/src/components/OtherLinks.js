import React from "react";
import "./OtherLinks.css";

class OtherLinks extends React.Component {
  render() {
    const { img, info } = this.props;
    return (
      <div className="other-links">
        <img src={img} />
        <p className="other-links-info">{info}</p>
      </div>
    );
  }
}

export default OtherLinks;
