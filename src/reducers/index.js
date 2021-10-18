import WatchlistReducer from "./WatchlistReducer";
import { combineReducers } from "redux";

export default combineReducers({
  watchlists: WatchlistReducer,
});
