import React from "react";
import "./Footer.css";
import { ReactComponent as Logo } from "../static/favorite-24px.svg";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p className="footer-text">
          Made with <Logo className="footer-img" fill="#d65442" /> by Suryaraj
        </p>
      </div>
    );
  }
}

export default Footer;
