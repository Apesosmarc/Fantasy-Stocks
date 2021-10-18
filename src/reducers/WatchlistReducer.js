import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_WATCHLIST":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_WATCHLISTS":
      return { ...state, ...action.payload };
    case "CREATE_WATCHLIST":
      return { ...state };
    case "DELETE_STREAM":
      return { ..._.omit(state, action.payload[0]), ...action.payload[1] };
    default:
      return state;
  }
};
