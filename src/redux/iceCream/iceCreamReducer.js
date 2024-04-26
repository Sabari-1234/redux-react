const initialState = {
  NumberOfIcecream: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        NumberOfIcecream: state.NumberOfIcecream - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
