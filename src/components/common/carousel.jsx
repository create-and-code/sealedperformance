import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Slider extends Component {
  render() {
    const { images } = this.props;
    return (
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {images.map(image => (
          <div key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>
    );
  }
}

export default Slider;
