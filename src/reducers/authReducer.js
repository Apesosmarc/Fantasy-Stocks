export default (state = {}, action) => {
  switch (action.type) {
    case "GUEST_SIGN_IN":
      return {
        ...state,
        isSignedIn: false,
        userId: action.payload,
        isGuestSignedIn: true,
      };

    case "GUEST_SIGN_OUT":
      return {
        ...state,
        userId: null,
        isGuestSignedIn: false,
      };
    case "SIGN_IN":
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
        isGuestSignedIn: false,
      };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, isGuestSignedIn: false };
    default:
      return state;
  }
};
