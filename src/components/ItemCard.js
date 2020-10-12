import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

function ItemCard(props) {
  return (
    <div className="card">
      <img
        src={props.item.image}
        alt={props.item.name}
        className="product-image"
      />
      <p>{props.item.name}</p>
      <p>$ {props.item.price}</p>
      <input type="text" name="itemCount" onChange={props.handleChange} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.addToCart(props.item);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default ItemCard;
