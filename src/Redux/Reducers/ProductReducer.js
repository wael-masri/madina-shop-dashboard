import {
  FETCH_DATA_FAILURE_PRODUCT,
  FETCH_DATA_REQUEST_PRODUCT,
  FETCH_DATA_SUCCESS_PRODUCT,
  REMOVE_ITEM_PRODUCT,
} from "../Types";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const ProductReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_DATA_REQUEST_PRODUCT:
      newState = { ...state };
      newState.loading = true;
      return newState;

    case FETCH_DATA_SUCCESS_PRODUCT:
      newState = { ...state };
      newState.loading = false;
      newState.data = action.payload;
      return newState;

    case FETCH_DATA_FAILURE_PRODUCT:
      newState = { ...state };
      newState.loading = false;
      newState.error = action.payload;
      return newState;
      case REMOVE_ITEM_PRODUCT:
        newState = { ...state };
        let updateState = newState.data.filter((item) => item._id !== action.payload);
        newState = {...state, data: updateState}
        return newState;  
    default:
      return state;
  }
};
export default ProductReducer;
