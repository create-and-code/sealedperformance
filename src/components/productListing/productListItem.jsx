import React from "react";
import { Link } from "react-router-dom";

const ProductListItem = props => {
  const { product, basketItem, addToBasket, removeFromBasket } = props;
  return (
    <div className="item">
      <Link to={`/product/${product._id}`}>
        <img src={product.imgs[0].thumbnail} alt={product.title} />
        <h4>{product.title}</h4>
        <p>£{product.price}</p>
      </Link>

      <button onClick={() => addToBasket(product)}>
        Add to basket ({(basketItem && basketItem.quantity) || 0})
      </button>
    </div>
  );
};

export default ProductListItem;
