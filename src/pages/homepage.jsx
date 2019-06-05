import React, { Component } from "react";
import Slider from "../components/common/carousel";
import { Link } from "react-router-dom";
import { getCategories } from "../services/categoryService";

class HomePage extends Component {
  state = {
    images: [
      { id: 1, name: "Slider 1", src: "images/slider/slide-1.jpg" },
      { id: 2, name: "Slider 2", src: "images/slider/slide-2.jpg" },
      { id: 3, name: "Slider 3", src: "images/slider/slide-3.jpg" },
      { id: 4, name: "Slider 4", src: "images/slider/slide-4.jpg" }
    ],
    categories: []
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;

    return (
      <React.Fragment>
        <Slider images={this.state.images} />

        <div className="row categories">
          {categories.map(category => (
            <div className="col-4">
              <div className="category">
                <img src={category.image} alt={category.name} />
                <div className="category__overlay">
                  <Link to={`/shop/${category.name}`}>
                    <button>{category.name}</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
                <h3>
                  Fast
                  <br />
                  delivery
                </h3>
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
