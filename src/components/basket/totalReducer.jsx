const totalWithdelivery = (basket, cost) => {
  console.log(basket);
  const items = [...basket];
  const total = items.reduce((sum, i) => (sum += i.quantity * i.price), 0);
  console.log(items);
  return [total];
};

const TotalBasketReducer = (state = [], action) => {
  switch (action.type) {
    case "DELIVERY":
      return totalWithdelivery(state, action.payload);

    default:
      return state;
  }
};

export default TotalBasketReducer;
