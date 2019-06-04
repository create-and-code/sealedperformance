const INITIAL_STATE = {
  items: [],
  total: 0
};

const basketWithoutItem = (basketItems, item) =>
  basketItems.filter(basketItem => basketItem._id !== item._id);

const itemInBasket = (basketItems, item) =>
  basketItems.filter(basketItem => basketItem._id === item._id)[0];

const addToBasket = (basket, item) => {
  const basketItem = itemInBasket(basket.items, item);
  const items =
    basketItem === undefined
      ? [...basketWithoutItem(basket.items, item), { ...item, quantity: 1 }]
      : [
          ...basketWithoutItem(basket.items, item),
          { ...basketItem, quantity: basketItem.quantity + 1 }
        ];

  const total = basket.total + item.price;
  return { items, total };
};

const removeFromBasket = (basket, item) => {
  const items =
    item.quantity === 1
      ? [...basketWithoutItem(basket.items, item)]
      : [
          ...basketWithoutItem(basket.items, item),
          { ...item, quantity: item.quantity - 1 }
        ];

  const total = basket.total - item.price;
  return { items, total };
};

const removeAllFromBasket = (basket, item) => {
  const items = [...basketWithoutItem(basket.items, item)];
  const total = items.reduce(
    (result, item) => result + item.price * item.quantity,
    0
  );
  return { items, total };
};

const BasketReducer = (state = INITIAL_STATE, action) => {
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
