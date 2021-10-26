export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_WATCHLIST":
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
