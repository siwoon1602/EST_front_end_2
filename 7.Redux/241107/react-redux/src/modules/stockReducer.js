export const sale = () => {
  return { type: "SALE" };
};
export const soldout = () => {
  return { type: "SOLDOUT" };
};

const initialState = {
  message: "판매중!!",
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SALE":
      return {
        ...state,
        message: "판매중!!",
      };
    case "SOLDOUT":
      return {
        ...state,
        message: "완판!!",
      };
    default:
      return state;
  }
};

export default stockReducer;
