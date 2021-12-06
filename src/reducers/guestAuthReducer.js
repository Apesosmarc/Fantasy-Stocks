const guestAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case "GUEST_SIGN_IN":
      return {
        ...state,
        userId: action.payload,
        isSignedIn: true,
      };
    case "GUEST_SIGN_OUT":
      return {
        ...state,
        userId: null,
        isSignedIn: false,
      };
    default:
      return state;
  }
};

export default guestAuthReducer;
