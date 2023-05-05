import { FETCH_DATA_FAILURE_COUPON, FETCH_DATA_REQUEST_COUPON, FETCH_DATA_SUCCESS_COUPON, REMOVE_ITEM_COUPON } from "../Types";

  
  export const fetchDataRequestCoupon = () => {
    const action = {
      type: FETCH_DATA_REQUEST_COUPON,
    };
    return action;
  };
  export const fetchDataSuccessCoupon = (data) => {
    const action = {
      type: FETCH_DATA_SUCCESS_COUPON,
      payload: data,
    };
    return action;
  };
  export const fetchDataFailureCoupon = (error) => {
    const action = {
      type: FETCH_DATA_FAILURE_COUPON,
      payload : error
    };
    return action;
  };
  export const removeItemCoupon = (id) => {
    const action = {
      type: REMOVE_ITEM_COUPON,
      payload : id
    };
    return action;
  };
  