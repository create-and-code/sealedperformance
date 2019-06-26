const totalWithdelivery = (basket, cost) => {
  const items = [...basket];
  const total = items.reduce((sum, i) => (sum += i.quantity * i.price), 0);
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
