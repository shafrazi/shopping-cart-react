import React from "react";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav(props) {
  return (
    <ul>
      <Link to="/">
        <li className="logo">
          <h1>DopeKicks</h1>
        </li>
      </Link>
      <Link to="/">
        <li className="nav-link">Home</li>
      </Link>
      <Link to="/shop">
        <li className="nav-link">Shop</li>
      </Link>
      <li className="nav-link icon">
        <div className="badge-div">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          {props.cart.length > 0 ? (
            <span className="item-count">{props.cart.length}</span>
          ) : null}
        </div>
      </li>
    </ul>
  );
}
export default Nav;
