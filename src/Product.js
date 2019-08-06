import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';


class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle style={{textTransform: "uppercase", fontWeight: "bold"}}>
            {this.props.name}
          </CardTitle>
          <br />
          <CardImg src={this.props.imageUrl} alt={this.props.name} />
          <CardText>
            ${this.props.price}
            <br />
            <br />
            {this.props.description}
          </CardText>
        </CardBody>
      </Card>
    )
  }
}

const mapDispatchToProps = {  }


export default connect(null, mapDispatchToProps)(Product);

//TODO add button for adding/removing from cart