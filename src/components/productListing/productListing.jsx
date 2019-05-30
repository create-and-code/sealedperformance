import React from "react";
import ProductListItem from "./productListItem";
import { connect } from "react-redux";

const ProductListing = props => {
  const { addToBasket, products } = props;

  return (
    <div className="product-listing">
      {products.map(product => (
        <ProductListItem
          product={product}
          key={product._id}
          addToBasket={addToBasket}
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
