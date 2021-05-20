import React from "react";
import ReactModal from "react-modal";
import "./Main.css";
import DeveloperInfo from "./DeveloperInfo";
import DeveloperLink from "./DeveloperLink";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  modalHandler = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
    document.querySelector("body").style.overflow = "hidden";
  };

  render() {
    return (
      <div className="main-section">
        <DeveloperLink
          image="https://avatars.githubusercontent.com/u/55868588?v=4"
          handle="suryaraj1"
        />
        <hr className="main-section-divider" />
        <p className="main-section-text">
          Could not find what you were looking for?
        </p>
        <button onClick={this.modalHandler} className="main-section-btn">
          Add developer info
        </button>
        <DeveloperInfo showModal={this.state.showModal} />
      </div>
    );
  }
}

export default Main;
