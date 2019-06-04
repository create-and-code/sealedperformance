import React, { Component } from "react";
import Slider from "../components/common/carousel";
import { Link } from "react-router-dom";

class HomePage extends Component {
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

        <div className="row categories">
          <div className="col-4">
            <div className="category">
              <img src="/images/products/washers.jpg" alt="" />
              <div className="category__overlay">
                <Link to="/shop">
                  <button>Category 1</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="category">
              <img src="/images/products/washers.jpg" alt="" />
              <div className="category__overlay">
                <Link to="/shop">
                  <button>Category 2</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="category">
              <img src="/images/products/washers.jpg" alt="" />
              <div className="category__overlay">
                <Link to="/shop">
                  <button>Category 3</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="category">
              <img src="/images/products/washers.jpg" alt="" />
              <div className="category__overlay">
                <Link to="/shop">
                  <button>Category 4</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="category">
              <img src="/images/products/washers.jpg" alt="" />
              <div className="category__overlay">
                <Link to="/shop">
                  <button>Category 5</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="category">
              <img src="/images/products/washers.jpg" alt="" />
              <div className="category__overlay">
                <Link to="/shop">
                  <button>Category 6</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container section">
          <div className="row services">
            <div className="col-4">
              <div className="service">
                <i className="fa fa-users" aria-hidden="true" />
                <h3>Professional service</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit laborum, reprehenderit, eligendi et explicabo nobis
                  esse laboriosam nam maxime similique ipsum officiis vel omnis
                  eum deserunt eius, recusandae accusamus ab!
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="service">
                <i className="fa fa-clock-o" aria-hidden="true" />
                <h3>Fast delivery</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit laborum, reprehenderit, eligendi et explicabo nobis
                  esse laboriosam nam maxime similique ipsum officiis vel omnis
                  eum deserunt eius, recusandae accusamus ab!
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="service">
                <i className="fa fa-car" aria-hidden="true" />
                <h3>Some other service</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit laborum, reprehenderit, eligendi et explicabo nobis
                  esse laboriosam nam maxime similique ipsum officiis vel omnis
                  eum deserunt eius, recusandae accusamus ab!
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
