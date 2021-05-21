import React from "react";
import "./DeveloperLink.css";
import LinkLogo from "../static/north_east-24px.svg";
import { Link } from "react-router-dom";

class DeveloperLink extends React.Component {
  render() {
    const { image, handle } = this.props;
    return (
      <div className="developer-link">
        <img className="developer-link-img" src={image} alt="developer-image" />
        <p className="developer-link-handle">
          {handle}
          <Link
            to={{
              pathname: `/developers/${handle}`,
              developerProps: {
                id: handle,
              },
            }}
          >
            <img src={LinkLogo} className="developer-link-icon" />
          </Link>
        </p>
      </div>
    );
  }
}

export default DeveloperLink;
