export default (state = {}, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return { ...state, [action.payload.stock]: action.payload.news };
    default:
      return state;
  }
};
