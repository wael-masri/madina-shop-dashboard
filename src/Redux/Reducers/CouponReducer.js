import {
  FETCH_DATA_FAILURE_COUPON,
  FETCH_DATA_REQUEST_COUPON,
  FETCH_DATA_SUCCESS_COUPON,
  REMOVE_ITEM_COUPON,
} from "../Types";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const CouponReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_DATA_REQUEST_COUPON:
      newState = { ...state };
      newState.loading = true;
      return newState;

    case FETCH_DATA_SUCCESS_COUPON:
      newState = { ...state };
      newState.loading = false;
      newState.data = action.payload;
      return newState;

    case FETCH_DATA_FAILURE_COUPON:
      newState = { ...state };
      newState.loading = false;
      newState.error = action.payload;
      return newState;

    case REMOVE_ITEM_COUPON:
      newState = { ...state };
      let updateState = newState.data.filter(
        (item) => item._id !== action.payload
      );
      newState = { ...state, data: updateState };
      return newState;

    default:
      return state;
  }
};
export default CouponReducer;
