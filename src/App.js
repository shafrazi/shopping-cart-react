import React from "react";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
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
    };
  }

  addToCart = (item, itemCount) => {
    this.setState((prevState) => {
      const itemObject = {
        product: item,
        itemCount: itemCount,
      };
      prevState.cart.push(itemObject);
      return {
        cart: prevState.cart,
        cartTotal: prevState.cartTotal + item.price * itemObject.itemCount,
      };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <AppBar position="sticky" className="header">
          <Nav
            className="nav"
            cart={this.state.cart}
            viewCart={this.viewCart}
          />
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
          <Route
            exact
            path="/cart"
            component={(props) => {
              return (
                <Cart
                  {...props}
                  cart={this.state.cart}
                  total={this.state.cartTotal}
                />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
