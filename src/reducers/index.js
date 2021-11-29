import UsersReducer from "./UsersReducer";
import StocksReducer from "./StocksReducer";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import newsReducer from "./newsReducer";
import testAPI from "./testAPI";
import OAuth2Reducer from "./OAuth2Reducer";
import googleAuthReducer from "./googleAuthReducer";
import guestAuthReducer from "./guestAuthReducer";

export default combineReducers({
  form: formReducer,
  news: newsReducer,
  stocks: StocksReducer,
  theme: themeReducer,
  user: UsersReducer,
  googleAuth: googleAuthReducer,
  testAPI: testAPI,
  guestAuth: guestAuthReducer,
  // googleAuth: OAuth2Reducer,
});
