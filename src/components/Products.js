import React, { Component } from "react";
import formatCurrency from "../util";

export default class Products extends Component {
  render() {
    return (
      <div className="row">
        {this.props.products.map((product) => (
          <div key={product.id} className="col m3 s12 my-2">
            <div className="card">
              <div className="card-image">
                <a href={"#" + product.id}>
                  <img className="responsive-img" src={product.image} alt="" />
                </a>
              </div>
              <p className="center ">{product.title}</p>
              <p className="center">
                Available Ram: <br />
                <strong>{product.availableRam.join(" ")}</strong>
              </p>
              <div className="product-price">
                <div className="mx-sm-2 mb-sm-2">
                  Price: <strong>{formatCurrency(product.price)}</strong>
                </div>
                <button
                  onClick={() => this.props.addToCart(product)}
                  className="btn indigo darken-4 w-100"
                >
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
