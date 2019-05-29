const basketWithoutItem = (basket, item) =>
  basket.filter(basketItem => basketItem._id !== item._id);

const itemInBasket = (basket, item) =>
  basket.filter(basketItem => basketItem._id === item._id)[0];

const addToBasket = (basket, item) => {
  const basketItem = itemInBasket(basket, item);
  return basketItem === undefined
    ? [...basketWithoutItem(basket, item), { ...item, quantity: 1 }]
    : [
        ...basketWithoutItem(basket, item),
        { ...basketItem, quantity: basketItem.quantity + 1 }
      ];
};

const removeFromBasket = (basket, item) => {
  return item.quantity === 1
    ? [...basketWithoutItem(basket, item)]
    : [
        ...basketWithoutItem(basket, item),
        { ...item, quantity: item.quantity - 1 }
      ];
};

const removeAllFromBasket = (basket, item) => {
  return [...basketWithoutItem(basket, item)];
};

const BasketReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return addToBasket(state, action.payload);

    case "REMOVE":
      return removeFromBasket(state, action.payload);

    case "REMOVE_ALL":
      return removeAllFromBasket(state, action.payload);

    default:
      return state;
  }
};

export default BasketReducer;
