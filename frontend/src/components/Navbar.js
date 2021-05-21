import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-section">
        <p className="navbar-left-section">The Developer Profile</p>
        <p className="navbar-right-section">All Developers</p>
      </div>
    );
  }
}

export default Navbar;
