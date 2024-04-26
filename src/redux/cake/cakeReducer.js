const initialState = {
  NumberOfcakes: 10,
};
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        NumberOfcakes: state.NumberOfcakes - action.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
