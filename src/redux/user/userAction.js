import axios from "axios";

export const fetchUserRequest = () => {
  return {
    type: "FETCH_USER_REQUEST",
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: "FETCH_USER_FAILURE",
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());

    axios

      .get("https://662a055367df268010a24f31.mockapi.io/users")
      .then((response) => {
        const user = response.data;
        dispatch(fetchUserSuccess(user));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchUserFailure(error));
      });
  };
};
