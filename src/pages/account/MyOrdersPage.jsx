import React, { Component } from "react";
import { getOrders } from "../../services/orderService";

class MyOrdersPage extends Component {
  state = {
    orders: []
  };

  async componentDidUpdate() {
    const { data } = await getOrders(this.props.user._id);
    this.setState({ orders: data });
  }

  render() {
    return (
      <div>
        <h1>My Orders</h1>
        <table>
          <tr>
            <th>Order number</th>
            <th>Order date</th>
            <th>Shipped date</th>
            <tr>Items</tr>
            <th>Total</th>
            <td>View order</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default MyOrdersPage;
