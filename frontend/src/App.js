import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import DeveloperProfile from "./DevProfile";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/developers/:id" component={DeveloperProfile} />
        </Switch>
      </Router>
    );
  }
}

export default App;
