import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";

const reducer = combineReducers({
  cart: cartReducer,
  filters: filterReducer,
});

export default reducer;
