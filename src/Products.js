import React, { Component } from "react";
import { products } from "./data.json";
import Product from "./Product";

class Products extends Component {
  render() {
    const ids = Object.keys(products);
    return (
      <div className="products-display">
        {ids.map(id =>
          <Product
            key={id}
            name={products[id].name}
            price={products[id].price}
            description={products[id].description}
            imageUrl={products[id].image_url}
          />
        )}
      </div>
    )
  }
}

// connect(null, mapdispatchtoprops)
export default Products;