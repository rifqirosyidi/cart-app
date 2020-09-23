import React, { Component } from "react";
import formatCurrency from "../util";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <div
          className="card p-2 indigo white-text"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "70px",
          }}
        >
          {cartItems.length === 0 ? (
            <div className="cart">Cart Is Empty</div>
          ) : (
            <div>
              You Have <strong>{cartItems.length}</strong> item in the cart{" "}
            </div>
          )}
        </div>

        {cartItems.length > 0 ? (
          <div>
            <ul class="collection">
              {cartItems.map((item) => (
                <li key={item.id} class="collection-item avatar">
                  <img src={item.image} alt="" class="circle" />
                  <span class="title black-text">{item.title}</span>
                  <p>
                    {formatCurrency(item.price)} x <strong>{item.count}</strong>{" "}
                    <br />
                    Second Line
                  </p>
                  <a
                    href="#!"
                    class="secondary-content"
                    onClick={() => this.props.removeFromCart(item)}
                  >
                    <i class="material-icons red-text">delete</i>
                  </a>
                </li>
              ))}
            </ul>

            <div className="row p-2">
              <div
                className="col card indigo white-text"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "70px",
                  width: "50%",
                }}
              >
                {formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )}
              </div>
              <div
                className="col card indigo darken-4 white-text"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "70px",
                  width: "50%",
                }}
              >
                Proceed
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
