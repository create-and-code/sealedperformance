import React from "react";
import ProductListItem from "./productListItem";
import { connect } from "react-redux";

const ProductListing = props => {
  const { addToBasket, removeFromBasket, products, basket } = props;

  return (
    <div className="product-listing">
      {products.map(product => (
        <ProductListItem
          product={product}
          key={product._id}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          basketItem={
            basket.filter(basketItem => basketItem._id === product._id)[0]
          }
        />
      ))}
    </div>
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
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing);
