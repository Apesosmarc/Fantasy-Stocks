export default (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isGoogleSignedIn: true,
        OAuthId: action.payload,
      };
    case "SIGN_OUT":
      return { ...state, isGoogleSignedIn: false };
    default:
      return state;
  }
};
