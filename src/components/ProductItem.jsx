import React, { Component } from "react";

export default class ProductItem extends Component {
    handleItem_4 = (id) => {
        this.props.handleItem_3(id);
    }
  render() {
    const itemShoe = this.props.item;
    const {name, price, image, id} = itemShoe;
    return (
      <div className="card">
        <div className="itemImg" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
            this.handleItem_4(id);
        }}>
          <img className="img-fluid" src={image} alt="" />
        </div>
        <div className="cardContent">
            <h5>{name}</h5>
            <p>{price} $</p>
            <button className="btn btn-success">Add to cart <i class="fa-solid fa-cart-plus"></i></button>
        </div>
      </div>
    );
  }
}
