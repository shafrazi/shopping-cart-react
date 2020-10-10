import React from "react";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppBar } from "@material-ui/core";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppBar position="sticky" className="header">
          <Nav className="nav" />
        </AppBar>
        <Switch>
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
