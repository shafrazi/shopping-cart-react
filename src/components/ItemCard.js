import React from "react";
import { Button } from "@material-ui/core";

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 1,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = () => {
    this.props.addToCart(this.props.item, this.state.itemCount);
    this.setState({
      itemCount: 1,
    });
  };

  render() {
    return (
      <div className="card">
        <img
          src={this.props.item.image}
          alt={this.props.item.name}
          className="product-image"
        />
        <p>{this.props.item.name}</p>
        <p>$ {this.props.item.price}</p>
        <input
          type="text"
          name="itemCount"
          onChange={this.handleChange}
          value={this.state.itemCount}
        />
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Add to cart
        </Button>
      </div>
    );
  }
}

export default ItemCard;
