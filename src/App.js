import React from "react";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Nav from "./components/Nav";
import items from "./Item";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppBar } from "@material-ui/core";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: items,
      cart: [],
      cartTotal: 0,
      itemCount: 1,
    };
  }

  addToCart = (item) => {
    this.setState((prevState) => {
      const itemObject = {
        product: item,
        itemCount: prevState.itemCount,
      };
      prevState.cart.push(itemObject);
      return {
        cart: prevState.cart,
        cartTotal: prevState.cartTotal + item.price * itemObject.itemCount,
        itemCount: 1,
      };
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    console.log(this.state.cart);
    return (
      <BrowserRouter>
        <AppBar position="sticky" className="header">
          <Nav className="nav" cart={this.state.cart} />
        </AppBar>
        <Switch>
          <Route
            exact
            path="/shop"
            render={(props) => {
              return (
                <Shop
                  {...props}
                  items={this.state.items}
                  addToCart={this.addToCart}
                  handleChange={this.handleChange}
                  itemCount={this.state.itemCount}
                />
              );
            }}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
