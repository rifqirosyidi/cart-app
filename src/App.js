// Feature 1 Test
import React, { Component } from "react";
import data from "./data.json";
import Filter from "./components/Filter";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      ram: "",
      sort: "",
    };
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((item) => item.id !== product.id),
    });
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }

    this.setState({
      cartItems: cartItems,
    });
  };

  sortProducts = (e) => {
    const sort = e.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a.id > b.id
            ? 1
            : -1
        ),
    }));
  };

  filterRam = (e) => {
    if (e.target.value === "") {
      this.setState({
        ram: e.target.value,
        products: data.products,
      });
    } else {
      this.setState({
        ram: e.target.value,
        products: data.products.filter(
          (product) => product.availableRam.indexOf(e.target.value) >= 0
        ),
      });
    }
  };

  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>

        <main className="mx-2 ">
          <div className="row">
            <div className="col l8 m8 s12">
              <Filter
                count={this.state.products.length}
                ram={this.state.ram}
                sort={this.state.sort}
                filterRam={this.filterRam}
                sortProducts={this.sortProducts}
              />
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              />
            </div>
            <div className="col l4 m4 s12 sidebar">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
              />
            </div>
          </div>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
