import React from "react";
import { buyCake } from "../redux/cake/cakeAction";
import { connect } from "react-redux";

const CakeContainer = ({ numberOfCakes, buyCake }) => {
  return (
    <div>
      <h1>Number Of Cake {numberOfCakes} </h1>
      <button onClick={() => buyCake()}>click me </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.NumberOfcakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
