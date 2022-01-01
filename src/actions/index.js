export { googleSignIn, googleSignOut } from "./OAuth2";

export { guestSignIn, guestSignOut } from "./guestAuth";

export { fetchUser, createUser, loginUser, userExists } from "./users";

export {
  createWatchlist,
  deleteWatchlist,
  addStockToWatchlist,
  deleteStockFromWatchlist,
} from "./watchlists";

export { getStockQuote } from "./stocks";

export { getNews } from "./news";

export { getTheme, setDarkMode, setLightMode } from "./getTheme";
