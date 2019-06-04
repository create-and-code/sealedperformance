import React from "react";
import Order from "../components/order/order";

const OrdersPage = props => {
  return (
    <div>
      <h1>My order</h1>
      <Order id={props.match.params.id} />
    </div>
  );
};

export default OrdersPage;
