import React, { Component } from "react";
import formatCurrency from "../util";

export default class Products extends Component {
  render() {
    return (
      <div className="row">
        {this.props.products.map((product) => (
          <div key={product.id} className="col m3 s12 my-2">
            <div class="card">
              <div class="card-image">
                <a href={"#" + product.id}>
                  <img className="responsive-img" src={product.image} alt="" />
                </a>
              </div>
              <p className="center">{product.title}</p>
              <div className="product-price">
                <div className="mx-sm-2 mb-sm-2">
                  Price: <strong>{formatCurrency(product.price)}</strong>
                </div>
                <button className="btn indigo darken-4 w-100">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
