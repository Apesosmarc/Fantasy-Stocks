import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STATE":
      return { ...state };
    case "FETCH_USER":
      return { ...state, ...action.payload };
    case "CREATE_USER":
      return { ...state, ...action.payload };
    case "FETCH_WATCHLIST":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_WATCHLISTS":
      return { ...state, ...action.payload };
    case "CREATE_WATCHLIST":
      return { ...state, ...action.payload };
    case "DELETE_WATCHLIST":
      return {
        ...state,
        ...action.payload,
      };
    case "ADD_STOCK_TO_WATCHLIST":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
