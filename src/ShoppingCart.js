import React, { Component } from 'react';
import { connect } from "react-redux";
import { Media } from "reactstrap";
import { countItemsInCart } from "./cartHelpers";


const imageUrl = "https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png";

class ShoppingCart extends Component {
  render() {
    return (
      <span>
        <Media style={{ maxHeight: "50px", maxWidth: "50px" }} src={imageUrl} alt="Shopping Cart" />
        Total items: {countItemsInCart(this.props.cart)}
      </span>
    )
  }
}

function mapStateToProps(state) {
  return { cart: state.cart }
}

export default connect(mapStateToProps, null)(ShoppingCart);