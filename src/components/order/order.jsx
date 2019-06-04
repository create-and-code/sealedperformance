import React, { Component } from "react";
import http from "../../services/httpService";

class Order extends Component {
  state = {
    order: null
  };

  componentDidMount() {
    http
      .get(
        `https://student-example-api.herokuapp.com/v1/orders/${this.props.id}`
      )
      .then(json => {
        this.setState({ order: json.data });
      });
  }

  renderOrder() {
    console.log(this.state.order);
    const { name, email, order_items } = this.state.order;

    return (
      <div>
        <h1>Order info</h1>
        <div>Name: {name}</div>
        <div>Email: {email}</div>

        <h2>Items</h2>
        <ul>
          {order_items &&
            order_items.map(item => {
              const {
                qty,
                product: { name, image, price }
              } = item;
              return (
                <li>
                  <img src={image} alt={name} />
                  {name}({qty} @ £{price} = £
                  {parseFloat(qty) * parseFloat(price)})
                </li>
              );
            })}
        </ul>
      </div>
    );
  }

  render() {
    const { order } = this.state;

    return <div>{order ? this.renderOrder() : "Loading order..."}</div>;
  }
}

export default Order;
