import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

class Home extends React.Component {
  render() {
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
