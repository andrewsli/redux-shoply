import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap';
import { addItem, removeItem } from "./actions";


class Product extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add() {
    this.props.addItem(this.props.id);
  }

  remove() {
    const { id, removeItem } = this.props;
    removeItem(id);
  }

  render() {
    const { name, imageUrl, price, description } = this.props;
    return (
      <Card>
        <CardBody>
          <CardTitle style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            {name}
          </CardTitle>
          <br />
          <CardImg src={imageUrl} alt={name} />
          <CardText>
            ${price}
            <br />
            <br />
            {description}
          </CardText>
          <Button onClick={this.add}>Add Item</Button>
          <Button onClick={this.remove}>Remove Item</Button>
        </CardBody>
      </Card>
    )
  }
}


export default connect(null, { addItem, removeItem })(Product);