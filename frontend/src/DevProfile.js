import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

class DevProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      developer: {},
    };
  }

  componentDidMount() {
    axios
      .get("/api/developers/gcnit")
      .then(response => {
        this.setState({
          developer: response.data.user,
        });
        console.log(this.state.developer);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { developer } = this.state;
    return (
      <div className="dev-profile">
        <Navbar />
        <Hero developer={developer} />
      </div>
    );
  }
}

export default DevProfile;
