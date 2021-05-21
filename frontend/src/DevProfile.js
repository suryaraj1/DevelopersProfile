import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GitRepoList from "./components/GithRepoList";

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
      })
      .catch(err => console.log(err));
  }

  render() {
    const { developer } = this.state;
    return (
      <div className="dev-profile">
        <Navbar />
        <Hero developer={developer} />
        <GitRepoList repositories={developer.repos} />
      </div>
    );
  }
}

export default DevProfile;
