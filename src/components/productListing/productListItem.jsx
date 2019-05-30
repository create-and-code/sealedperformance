import React from "react";
import { Link } from "react-router-dom";

const ProductListItem = ({ product, addToBasket }) => {
  return (
    <div className="item">
      <Link to={`/shop/product/${product._id}`}>
        <img src={product.imgs[0].thumbnail} alt={product.title} />
        <h4>{product.title}</h4>
        <p>£{product.price}</p>
      </Link>

      <button onClick={() => addToBasket(product)} className="btn__basket">
        Add to basket <i class="fa fa-angle-right" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ProductListItem;
