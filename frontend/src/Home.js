import React from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const { developers } = this.state;
    return (
      <div className="Home">
        <Header />
        <SearchBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;
