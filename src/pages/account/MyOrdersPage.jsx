import React, { Component } from "react";
import { getOrders } from "../../services/orderService";

class MyOrdersPage extends Component {
  state = {
    orders: [],
    userId: null
  };

  async componentDidUpdate() {
    this.setState({ userId: this.props.user._id });
  }

  async componentDidMount() {
    setTimeout(
      async function() {
        const { data } = await getOrders(this.state.userId);
        console.log(data);
        this.setState({ orders: data });
      }.bind(this),
      1000
    );
  }

  render() {
    return (
      <div className="container page">
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
