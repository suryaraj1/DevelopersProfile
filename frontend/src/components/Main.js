import React from "react";
import ReactModal from "react-modal";
import "./Main.css";
import DeveloperInfo from "./DeveloperInfo";
import DeveloperLink from "./DeveloperLink";
import DeveloperList from "./DeveloperList";
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      developers: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/developers")
      .then(response => {
        console.log(response.data);
        this.setState({
          developers: response.data,
        });
      })
      .catch(err => console.log(err));
  }

  modalHandler = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
    document.querySelector("body").style.overflow = "hidden";
  };

  render() {
    const { developers } = this.state;
    return (
      <div className="main-section">
        <DeveloperList developers={developers} />
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
