import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.NumberOfcakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number Of Cake {numberOfCakes} </h1>
      <button onClick={() => dispatch(buyCake())}>click me </button>
    </div>
  );
};

export default HooksCakeContainer;
