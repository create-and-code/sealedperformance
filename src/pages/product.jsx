import React, { Component } from "react";
import { getProduct } from "../services/productService";
import ImageGallery from "react-image-gallery";

class Product extends Component {
  state = {
    data: {
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
      if (productId === "new") return;

      const product = await getProduct(productId);
      this.setState({ data: product });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateProduct();
  }

  onSubmit = () => {
    console.log("Submit");
  };

  render() {
    const { data } = this.state;

    return (
      <div className="page container">
        <div className="row">
          <div className="col-6">
            <ImageGallery items={data.imgs} showPlayButton={false} />
          </div>
          <div className="col-6">
            <h2>{data.title}</h2>
            <p>‎£{data.price}</p>
            <p>{data.desc}</p>

            <form onSubmit={this.handleAdd} />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
