import React from "react";
import { connect } from "react-redux";

function sort(items) {
  return items.sort((a, b) => a._id - b._id);
}

const Cart = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {sort(props.basket).map(item => (
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => props.addToBasket(item)}>+</button>
              <button onClick={() => props.removeFromBasket(item)}>-</button>
            </td>
            <td>
              <button onClick={() => props.removeAllFromBasket(item)}>
                Remove all from basket
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function mapStateToProps(state) {
  return { basket: state.basket };
}

function mapDispatchToProps(dispatch) {
  return {
    addToBasket: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromBasket: item => {
      dispatch({ type: "REMOVE", payload: item });
    },
    removeAllFromBasket: item => {
      dispatch({ type: "REMOVE_ALL", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
