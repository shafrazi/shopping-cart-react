import React from "react";
import ItemCard from "./ItemCard";
import { Container } from "@material-ui/core";

function Shop(props) {
  const itemCardComponents = props.items.map((item, index) => {
    return (
      <ItemCard
        key={index}
        item={item}
        addToCart={props.addToCart}
        handleChange={props.handleChange}
        itemCount={props.itemCount}
      />
    );
  });

  return (
    <Container>
      <div className="item-container">{itemCardComponents}</div>
    </Container>
  );
}

export default Shop;
