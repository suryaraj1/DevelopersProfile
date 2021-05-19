import React from "react";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <div className="main-section">
        <hr className="main-section-divider" />
        <p className="main-section-text">
          Could not find what you were looking for?
        </p>
        <button className="main-section-btn">Add developer info</button>
      </div>
    );
  }
}

export default Main;
