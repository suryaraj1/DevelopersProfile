import React from "react";
import "./FormEntry.css";

class FormEntry extends React.Component {
  render() {
    const { icon, name, mandatory, onInput, value } = this.props;
    return (
      <div className="form-entry">
        <div className="form-entry-icon-wrapper">
          <img className="form-entry-icon" src={icon} />
          <p className="form-entry-icon-name">
            {name} {mandatory ? "*" : ""}
          </p>
        </div>
        <input
          name={name}
          value={value}
          className="form-entry-input"
          onInput={onInput}
        />
      </div>
    );
  }
}

export default FormEntry;
