const NewsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default NewsReducer;
