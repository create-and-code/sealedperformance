import React from "react";
import { connect } from "react-redux";
import Cart from "../basket/basket";
import CheckoutForm from "./form";
import http from "../../services/httpService";

function submitOrder(values, basket) {
  const { email, name } = values.order;

  return http
    .post("https://student-example-api.herokuapp.com/v1/orders.json", {
      order: {
        name,
        email,
        order_items_attributes: basket.map(item => ({
          product_id: item._id,
          qty: item.quantity
        }))
      }
    })
    .then(json => {
      const { data } = json;

      if (data.errors) {
        alert("something went wrong!");
        return;
      }
      console.log(json);
      document.location.href = `/orders/${data.id}`;
    });
}

const Checkout = props => {
  const { basket } = props;
  return (
    <React.Fragment>
      <h1>Checkout</h1>
      <Cart />
      <CheckoutForm onSubmit={values => submitOrder(values, basket)} />
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return { basket: state.basket };
}

export default connect(mapStateToProps)(Checkout);
