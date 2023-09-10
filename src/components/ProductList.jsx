import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
    handleItem_2 = (id) => {
        this.props.handleItem_1(id);
    }

  render() {
    const productList = this.props.product;
    return (
      <div className="shopBody">
        <div className="container">
          <h1>Shoe Shop</h1>
          <div className="row">
            {productList.map((item, index) => {
                return (
                    <div key={index} className="col-12 col-md-4">
                        <ProductItem item = {item} handleItem_3 = {this.handleItem_2} />
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    );
  }
}
