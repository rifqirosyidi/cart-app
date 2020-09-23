import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div
        className="card p-2 indigo white-text"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "70px",
        }}
      >
        <div style={{}}>Results: {this.props.count} Products</div>
        <div>
          <select
            className="browser-default"
            value={this.props.sort}
            onChange={this.props.sortProducts}
          >
            <option>Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>

        <div>
          <select
            className="browser-default"
            value={this.props.ram}
            onChange={this.props.filterRam}
          >
            <option disabled>Filter Ram</option>
            <option value="1GB">1GB</option>
            <option value="2GB">2GB</option>
            <option value="3GB">3GB</option>
            <option value="4GB">4GB</option>
            <option value="6GB">6GB</option>
            <option value="8GB">8GB</option>
          </select>
        </div>
      </div>
    );
  }
}
