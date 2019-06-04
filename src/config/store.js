import { createStore, combineReducers } from "redux";
import BasketReducer from "../components/basket/reducer";

const rootReducer = combineReducers({
  basket: BasketReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
