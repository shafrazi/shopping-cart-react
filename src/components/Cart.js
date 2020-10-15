import React from "react";
import { Button, Container } from "@material-ui/core";

function Cart(props) {
  function renderCartItems() {
    console.log(props.cart);
    const cartItems = props.cart.map((cartItem, index) => {
      return (
        <li key={index} className="cart-item-li">
          <p>{`${cartItem.itemCount} X ${cartItem.product.name}`}</p>
          <p>{`$ ${cartItem.product.price * cartItem.itemCount}`}</p>
        </li>
      );
    });
    return cartItems;
  }

  return (
    <Container className="container">
      <div className="cart-container">
        <ul className="cart-ul">
          {renderCartItems()}
          <hr />
          <div className="total-div">
            <p>Total</p>
            <p>{`$ ${props.total}`}</p>
          </div>
        </ul>
        <Button className="checkout-btn" variant="contained" color="primary">
          CHECKOUT
        </Button>
      </div>
    </Container>
  );
}

export default Cart;
