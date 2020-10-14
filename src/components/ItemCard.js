import React from "react";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

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
    if (this.state.itemCount >= 1) {
      this.props.addToCart(this.props.item, this.state.itemCount);
      this.setState({
        itemCount: 1,
      });
    }
  };

  increaseCount = () => {
    this.setState((prevState) => {
      return {
        itemCount: parseInt(prevState.itemCount) + 1,
      };
    });
  };

  decreaseCount = () => {
    if (this.state.itemCount > 1) {
      this.setState((prevState) => {
        return {
          itemCount: parseInt(prevState.itemCount) - 1,
        };
      });
    }
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

        <div className="item-count-container">
          <IconButton onClick={this.increaseCount} size="small" color="primary">
            <ArrowUpwardIcon fontSize="inherit" />
          </IconButton>
          <input
            type="text"
            className="input-count"
            name="itemCount"
            onChange={this.handleChange}
            value={this.state.itemCount}
          />

          <IconButton
            onClick={this.decreaseCount}
            size="small"
            color="secondary"
          >
            <ArrowDownwardIcon fontSize="inherit" />
          </IconButton>
        </div>

        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Add to cart
        </Button>
      </div>
    );
  }
}

export default ItemCard;
