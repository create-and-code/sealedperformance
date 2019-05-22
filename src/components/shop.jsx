import React, { Component } from "react";
import Slider from "./common/carousel";
import { Link } from "react-router-dom";

class Shop extends Component {
  state = {
    images: [
      { id: 1, name: "Slider 1", src: "images/slider/slide-1.jpg" },
      { id: 2, name: "Slider 2", src: "images/slider/slide-2.jpg" },
      { id: 3, name: "Slider 3", src: "images/slider/slide-3.jpg" },
      { id: 4, name: "Slider 4", src: "images/slider/slide-4.jpg" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Slider images={this.state.images} />

        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="category">
                <img src="/images/products/washers.jpg" alt="" />
                <div className="category__overlay">
                  <Link to="/products">
                    <button>Category 1</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="category">
                <img src="/images/products/washers.jpg" alt="" />
                <div className="category__overlay">
                  <Link to="/products">
                    <button>Category 2</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="category">
                <img src="/images/products/washers.jpg" alt="" />
                <div className="category__overlay">
                  <Link to="/products">
                    <button>Category 3</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Shop;
