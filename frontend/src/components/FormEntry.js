import React from "react";
import "./FormEntry.css";

class FormEntry extends React.Component {
  render() {
    const { icon, name, mandatory } = this.props;
    return (
      <div className="form-entry">
        <div className="form-entry-icon-wrapper">
          <img className="form-entry-icon" src={icon} />
          <p className="form-entry-icon-name">
            {name} {mandatory ? "*" : ""}{" "}
          </p>
        </div>
        <input className="form-entry-input" />
      </div>
    );
  }
}

export default FormEntry;
