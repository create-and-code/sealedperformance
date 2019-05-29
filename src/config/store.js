import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import BasketReducer from "../components/basket/reducer";

const rootReducer = combineReducers({
  basket: BasketReducer,
  form: formReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
