import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return { ...state, ...action.payload };
    case "CREATE_USER":
      return { ...state, ...action.payload };
    case "FETCH_WATCHLIST":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_WATCHLISTS":
      return { ...state, ...action.payload };
    case "CREATE_WATCHLIST":
      return { ...state };
    case "DELETE_WATCHLIST":
      return {
        ...Object.values(state).filter((list) => list.id != action.payload),
      };
    case "ADD_STOCK_TO_WATCHLIST":
      Object.values(state).forEach((list, index) => {
        if (list.id === action.payload.id) {
          state[index] = action.payload;
        }
      });

      return { ...state };

    default:
      return state;
  }
};
