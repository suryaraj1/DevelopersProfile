import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GitRepoList from "./components/GithRepoList";
import Footer from "./components/Footer";

class DevProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      developer: {},
      isDataLoaded: false,
    };
  }

  componentDidMount() {
    const id = this.props.location.developerProps.id;
    console.log(id);
    axios
      .get(`/api/developers/${id}`)
      .then(response => {
        this.setState({
          developer: response.data.user,
          isDataLoaded: true,
        });
        console.log(this.state.developer.repos);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { developer, isDataLoaded } = this.state;
    return (
      <div className="dev-profile">
        <Navbar />
        <Hero developer={developer} />
        {isDataLoaded && <GitRepoList repositories={developer.repos} />}
        <Footer />
      </div>
    );
  }
}

export default DevProfile;
