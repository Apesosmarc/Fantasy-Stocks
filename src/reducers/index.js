import UsersReducer from "./UsersReducer";
import StocksReducer from "./StocksReducer";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
  user: UsersReducer,
  stocks: StocksReducer,
  userInfo: authReducer,
  form: formReducer,
});
