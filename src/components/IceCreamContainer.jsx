import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";

const IceCreamContainer = () => {
  const NumberOfIcecream = useSelector(
    (state) => state.iceCream.NumberOfIcecream
  );
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>Number Of Cake {NumberOfIcecream} </h1>
        <button onClick={() => dispatch(buyIceCream())}>click me </button>
      </div>
    </div>
  );
};

export default IceCreamContainer;
