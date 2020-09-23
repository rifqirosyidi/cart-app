// Feature 1 Test
import React, { Component } from "react";
import data from "./data.json";
import Filter from "./components/Filter";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      ram: "",
      sort: "",
    };
  }

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
              <Products products={this.state.products} />
            </div>
            <div className="col l4 m4 s12 my-2 sidebar">Sidebar</div>
          </div>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
