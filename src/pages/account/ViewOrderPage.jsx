import React, { Component } from "react";
import { getOrders } from "../../services/orderService";

class ViewOrderPage extends Component {
  state = {
    order: {}
  };

  async componentDidMount() {
    const { data } = await getOrders(this.props.user._id);
    this.setState({ orders: data });
  }

  render() {
    return (
      <div>
        <h1>My Orders</h1>
      </div>
    );
  }
}

export default ViewOrderPage;
