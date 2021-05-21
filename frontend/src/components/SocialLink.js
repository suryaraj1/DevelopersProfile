import React from "react";
import "./SocialLink.css";

class SocialLink extends React.Component {
  render() {
    const { url, img, alternateText } = this.props;
    return (
      <div className="social-link-wrapper">
        {url !== "" ? (
          <a target="__blank" href={url}>
            <img src={img} alt={alternateText} />
          </a>
        ) : null}
      </div>
    );
  }
}

export default SocialLink;
