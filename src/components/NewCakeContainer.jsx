import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";

const NewCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.NumberOfcakes);
  const dispatch = useDispatch();
  const [number, setnumber] = useState(1);
  return (
    <div>
      <h1>Number Of Cake {numberOfCakes} </h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setnumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        buy {number} cakes{" "}
      </button>
    </div>
  );
};

export default NewCakeContainer;
