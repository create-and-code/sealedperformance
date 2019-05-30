import React from "react";
import ImageGallery from "react-image-gallery";

const ProductItem = ({ product, addToBasket }) => {
  return (
    <div className="product">
      <ImageGallery items={product.imgs} showPlayButton={false} />
      <div className="product__info">
        <h2>{product.title}</h2>
        <p>‎£{product.price}</p>
        <p>{product.desc}</p>

        <button onClick={() => addToBasket(product)} className="btn__basket">
          Add to basket <i class="fa fa-angle-right" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
