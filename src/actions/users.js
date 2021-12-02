import users from "../apis/users";

export const fetchUser = (userId) => async (dispatch) => {
  const response = await users.get(`/users/${userId}`);

  dispatch({
    type: "FETCH_USER",
    payload: response.data.user,
  });
};

export const createUser = (OAuthId) => async (dispatch) => {
  const response = await users.post("/users", {
    OAuthId,
  });

  dispatch({
    type: "CREATE_USER",
    payload: response.data,
  });
};

export const loginUser = (OAuthId) => async (dispatch) => {
  const response = await users.post("/users", {
    OAuthId,
  });
  dispatch({
    type: "LOGIN_USER",
    payload: response.data,
  });
};

export const userExists = (OAuthId) => async (dispatch) => {
  const doesUserExist = await users.get(`/users?id=${OAuthId}`);

  dispatch({
    type: "USER_EXISTS",
    payload: doesUserExist.data.doesExist,
  });
};
