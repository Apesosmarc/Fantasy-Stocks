import UsersReducer from "./UsersReducer";
import StocksReducer from "./StocksReducer";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import themeReducer from "./themeReducer";

export default combineReducers({
  form: formReducer,
  stocks: StocksReducer,
  theme: themeReducer,
  user: UsersReducer,
  userInfo: authReducer,
});
