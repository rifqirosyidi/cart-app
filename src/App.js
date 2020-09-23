// Feature 1 Test
import React, { Component } from "react";
import data from "./data.json";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>

        <main className="mx-2 ">
          <div className="row">
            <div className="col l8 m8 s12">
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
