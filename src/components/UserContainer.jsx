import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userAction";

const UserContainer = () => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {userState.loading ? (
        <h1>loading</h1>
      ) : userState.error ? (
        <h1>{useState.error}</h1>
      ) : (
        userState.users.map((user, id) => (
          <p key={id}>
            {id}-{user.name}
          </p>
        ))
      )}
    </div>
  );
};

export default UserContainer;
