import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";

const ItemContainner = ({ itemState, buyItem }) => {
  return (
    <div>
      <h1>Item -{itemState}</h1>
      <button onClick={() => buyItem()}>buy</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.NumberOfcakes
    : state.iceCream.NumberOfIcecream;
  return { itemState: itemState };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainner);
