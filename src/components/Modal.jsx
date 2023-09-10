import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const details = this.props.detail;
    const {name, price, description, quantity, image} = details;
    return (
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {name}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
                <div className="cardModal">
                    <div className="cardModalImg">
                        <img className="img-fluid" src={image} alt="" />
                    </div>
                    <div className="cardModalContent">
                        <h6>{description}</h6>
                        <p>Quantity: {quantity}</p>
                        <h5>{price} $</h5>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-success">
              Add to cart <i class="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
