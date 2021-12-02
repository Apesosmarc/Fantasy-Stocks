import StocksReducer from "./StocksReducer";
import { combineReducers } from "redux";
import ThemeReducer from "./ThemeReducer";
import NewsReducer from "./NewsReducer";
import UsersReducer from "./UsersReducer";
import GoogleAuthReducer from "./GoogleAuthReducer";
import GuestAuthReducer from "./GuestAuthReducer";
// reduxform reducer
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  form: formReducer,
  news: NewsReducer,
  stocks: StocksReducer,
  theme: ThemeReducer,
  users: UsersReducer,
  googleAuth: GoogleAuthReducer,
  guestAuth: GuestAuthReducer,
});
