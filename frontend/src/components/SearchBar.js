import React from "react";
import "./SearchBar.css";
import searchLogo from "../static/search-24px.svg";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <div className="search-bar-wrapper">
          <input
            className="search-bar-input"
            type="input"
            placeholder="Search for username"
          />
          <img className="search-bar-img" src={searchLogo} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
