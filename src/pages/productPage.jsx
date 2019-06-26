import React, { Component } from "react";
import { getProduct } from "../services/productService";
import ProductItem from "../components/product/productItem";
import { connect } from "react-redux";

class ProductPage extends Component {
  state = {
    product: {
      title: "",
      category: "",
      numberInStock: "",
      price: "",
      desc: "",
      imgs: []
    },
    errors: {}
  };

  async populateProduct() {
    try {
      const productId = this.props.match.params.id;
      const product = await getProduct(productId);
      this.setState({ product });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateProduct();
  }

  render() {
    const { product } = this.state;
    const { addToBasket } = this.props;

    return (
      <div className="page container">
        <ProductItem
          product={product}
          key={product._id}
          addToBasket={addToBasket}
        />
      </div>
    );
  }
}

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
)(ProductPage);
