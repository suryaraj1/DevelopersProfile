import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-section">
        <Link className="link" to="/">
          <p className="navbar-left-section">The Developer Profile</p>
        </Link>
        <Link className="link" to="/">
          <p className="navbar-right-section">All Developers</p>
        </Link>
      </div>
    );
  }
}

export default Navbar;
